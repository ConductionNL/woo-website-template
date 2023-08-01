import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";

import { useForm } from "react-hook-form";
import { InputText, SelectSingle } from "@conduction/components";
import { useFiltersContext } from "../../../context/filters";
import { Button } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const FiltersTemplate: React.FC = () => {
  const { filters, setFilters } = useFiltersContext();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setFilters({ name: data.name, selectOne: data.selectOne?.value, selectTwo: data.selectTwo?.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputText name="name" defaultValue={filters.name} {...{ register, errors }} />

      <SelectSingle
        options={TEMP_OPTIONS.slice(0, 5)}
        name="selectOne"
        defaultValue={TEMP_OPTIONS.find((option) => option.value === filters.selectOne)}
        {...{ register, errors, control }}
      />

      <SelectSingle
        options={TEMP_OPTIONS.slice(5, 10)}
        name="selectTwo"
        defaultValue={TEMP_OPTIONS.find((option) => option.value === filters.selectOne)}
        {...{ register, errors, control }}
      />

      <Button className={styles.button} type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Zoeken
      </Button>
    </form>
  );
};

const TEMP_OPTIONS = [
  { label: "Option-1", value: "1" },
  { label: "Option-2", value: "2" },
  { label: "Option-3", value: "3" },
  { label: "Option-4", value: "4" },
  { label: "Option-5", value: "5" },
  { label: "Option-6", value: "6" },
  { label: "Option-7", value: "7" },
  { label: "Option-8", value: "8" },
  { label: "Option-9", value: "9" },
  { label: "Option-10", value: "10" },
];
