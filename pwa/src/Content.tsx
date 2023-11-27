import * as React from "react";
import * as styles from "./Content.module.css";
import { FooterTemplate } from "./templates/templateParts/footer/FooterTemplate";
import { HeaderTemplate } from "./templates/templateParts/header/HeaderTemplate";
import { ThemeSwitcherTopBar } from "./templates/templateParts/themeSwitcherTopBar/ThemeSwitcherTopBar";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ThemeSwitcherTopBar />

      <HeaderTemplate layoutClassName={styles.header} />

      <div className={styles.pageContent}>{children}</div>

      <FooterTemplate />
    </div>
  );
};
