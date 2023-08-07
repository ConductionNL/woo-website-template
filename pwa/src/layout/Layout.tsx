import * as React from "react";
import * as styles from "./Layout.module.css";
import "../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { defaultGlobalContext, GlobalProvider, IGlobalContext } from "../context/global";
import { Head } from "./Head";
import { Content } from "../Content";
import { Document } from "@utrecht/component-library-react/dist/css-module";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [globalContext, setGlobalContext] = React.useState<IGlobalContext>(defaultGlobalContext);

  React.useEffect(() => {
    setAPI(new APIService());
  }, [pageContext]);

  React.useEffect(() => {
    setGlobalContext((context) => ({
      ...context,
      initiated: true,
      gatsby: {
        ...{ pageContext, location, previousPath: location.pathname },
      },
    }));
  }, [pageContext, location]);

  if (!globalContext.initiated) return <></>;

  return (
    <>
      <GlobalProvider value={[globalContext, setGlobalContext]}>
        <Head />
        <APIProvider value={API}>
          <Document className={clsx(process.env.GATSBY_NL_DESIGN_THEME_CLASSNAME, styles.document)}>
            <Toaster position="bottom-right" />

            <div className={styles.container}>
              <Content {...{ children }} />
            </div>
          </Document>
        </APIProvider>
      </GlobalProvider>
    </>
  );
};

export default Layout;
