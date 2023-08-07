import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import { useForm } from "react-hook-form";
import { InputText, SelectSingle } from "@conduction/components";
import { useFiltersContext } from "../../../context/filters";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { TEMP_YEARS } from "../../../data/years";
import { TEMP_PUBLICATION_TYPES } from "../../../data/PublicationType";

export const FiltersTemplate: React.FC = () => {
  const { filters, setFilters } = useFiltersContext();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setFilters({ _search: data.title, year: data.year?.value, publicationType: data.publicationType?.value });
  };

  const displayKey = "landing-results";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputText name="title" placeholder="Zoek.." defaultValue={filters._search} {...{ register, errors }} />

      <SelectSingle
        options={TEMP_YEARS}
        name="year"
        placeholder="year"
        defaultValue={TEMP_YEARS.find((option) => option.value === filters.year)}
        isClearable
        {...{ register, errors, control }}
      />

      <SelectSingle
        options={TEMP_PUBLICATION_TYPES}
        name="publicationType"
        placeholder="Publicatietype"
        defaultValue={TEMP_PUBLICATION_TYPES.find((option) => option.value === filters.publicationType)}
        isClearable
        {...{ register, errors, control }}
      />

      <ButtonGroup className={styles.buttonContainer}>
        <Button type="submit" className={styles.button}>
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Zoeken
        </Button>
      </ButtonGroup>

      <ResultsDisplaySwitch {...{ displayKey }} />
    </form>
  );
};
