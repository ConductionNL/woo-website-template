import * as React from "react";
import * as styles from "./ThemeSwitcherTopBar.module.css";
import { SelectSingle } from "@conduction/components";
import { useForm } from "react-hook-form";
import { availableThemes } from "../../../services/getConfig";
import { initiateEnvironment } from "../../../services/initiateEnvironment";

export const ThemeSwitcherTopBar: React.FC = () => {
  const {
    control,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const watchTheme = watch("theme");

  React.useEffect(() => {
    if (watchTheme) return;

    setValue(
      "theme",
      availableThemes.find((theme) => theme.value === window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME")),
    ); // init select field based on domain name
  }, [window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME")]);

  React.useEffect(() => {
    if (!watchTheme) return;

    initiateEnvironment(watchTheme.value);
  }, [watchTheme]);

  return (
    <section className={styles.container}>
      <SelectSingle
        options={availableThemes}
        name="theme"
        ariaLabel="Theme selector"
        {...{ register, errors, control }}
      />
    </section>
  );
};
