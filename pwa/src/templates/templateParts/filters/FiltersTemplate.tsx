import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import { useForm } from "react-hook-form";
import { InputText, SelectSingle } from "@conduction/components";
import { useFiltersContext } from "../../../context/filters";
import { Button, FormLabel } from "@utrecht/component-library-react/dist/css-module";
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
    setFilters({ name: data.name, selectOne: data.selectOne?.value, selectTwo: data.selectTwo?.value });
  };

  const displayKey = "landing-results";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.searchContent}>
        <InputText name="search" placeholder="Zoek.." defaultValue={filters.name} {...{ register, errors }} />

        <Button className={styles.button} type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Zoeken
        </Button>
      </div>

      <div className={styles.dropdownContent}>
        <div>
          <FormLabel>Jaar</FormLabel>
          <SelectSingle
            options={TEMP_YEARS}
            name="Jaar"
            defaultValue={TEMP_YEARS.find((option) => option.value === filters.selectOne)}
            isClearable
            {...{ register, errors, control }}
          />
        </div>

        <div>
          <FormLabel>Publicatietype</FormLabel>
          <SelectSingle
            options={TEMP_PUBLICATION_TYPES}
            name="Publicatietype"
            defaultValue={TEMP_PUBLICATION_TYPES.find((option) => option.value === filters.selectOne)}
            isClearable
            {...{ register, errors, control }}
          />
        </div>

        <div className={styles.displaySwitchContainer}>
          <ResultsDisplaySwitch {...{ displayKey }} />
        </div>
      </div>
    </form>
  );
};
