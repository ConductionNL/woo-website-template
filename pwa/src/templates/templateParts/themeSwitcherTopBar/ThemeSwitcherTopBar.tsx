import * as React from "react";
import * as styles from "./ThemeSwitcherTopBar.module.css";
import { SelectSingle } from "@conduction/components";
import { useForm } from "react-hook-form";
import { availableThemes } from "../../../services/getConfig";
import { useEnvironment } from "../../../hooks/useEnvironment";

export const ThemeSwitcherTopBar: React.FC = () => {
  const { initiateFromJSON } = useEnvironment();

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
  }, []);

  React.useEffect(() => {
    if (!watchTheme) return;

    initiateFromJSON(watchTheme.value);
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
