import * as React from "react";
import * as styles from "./Layout.module.css";
import "../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { defaultGlobalContext, GlobalProvider, IGlobalContext } from "../context/global";
import { Head } from "./Head";
import { Content } from "../Content";
import { Document, Surface } from "@utrecht/component-library-react/dist/css-module";
import { Toaster } from "react-hot-toast";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { IconPack, library } from "@fortawesome/fontawesome-svg-core";
import { useEnvironment } from "../hooks/useEnvironment";
import { ToolTip } from "@conduction/components";
import { Helmet } from "react-helmet";

export const TOOLTIP_ID = "cb8f47c3-7151-4a46-954d-784a531b01e6";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [globalContext, setGlobalContext] = React.useState<IGlobalContext>(defaultGlobalContext);
  const { initiateFromEnv, initiateFromJSON } = useEnvironment();

  library.add(fas, fab as IconPack, far as IconPack);

  React.useEffect(() => {
    if (process.env.GATSBY_ENV_VARS_SET === "true") {
      initiateFromEnv();
    } else {
      initiateFromJSON(window.location.hostname, window.location.host);
    }
  }, []);

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
          <Surface>
            <Document>
              <ToolTip id={TOOLTIP_ID} />

              {/* <Toaster position="bottom-right" /> Turned off for now */}

              <div className={styles.container}>
                <Content {...{ children }} />
              </div>
            </Document>
          </Surface>
        </APIProvider>
      </GlobalProvider>
    </>
  );
};

export default Layout;
