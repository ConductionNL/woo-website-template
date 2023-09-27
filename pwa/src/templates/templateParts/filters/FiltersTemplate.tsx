import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import { useForm } from "react-hook-form";
import { InputText, SelectSingle } from "@conduction/components";
import { useFiltersContext } from "../../../context/filters";
import { Button } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { generateYearsArray } from "../../../data/years";
import { TEMP_PUBLICATION_TYPES } from "../../../data/PublicationType";

interface FiltersTemplateProps {
  isLoading: boolean;
}

export const FiltersTemplate: React.FC<FiltersTemplateProps> = ({ isLoading }) => {
  const { filters, setFilters } = useFiltersContext();
  const filterTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watcher = watch();

  const today = new Date();
  const currentYear = today.getFullYear();

  const onSubmit = (data: any) => {
    setFilters({
      _search: data.title,
      "Publicatiedatum[after]": data.year?.after,
      "Publicatiedatum[before]": data.year?.before,
      Categorie: data.category?.value,
    });
  };

  React.useEffect(() => {
    if (filterTimeout.current) clearTimeout(filterTimeout.current);

    filterTimeout.current = setTimeout(() => onSubmit(watcher), 500);
  }, [watcher]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputText name="title" placeholder="Zoeken.." defaultValue={filters._search} {...{ register, errors }} />

        <SelectSingle
          options={generateYearsArray(currentYear - 1995)}
          name="year"
          placeholder="Jaar"
          isClearable
          {...{ register, errors, control }}
        />

        <SelectSingle
          options={TEMP_PUBLICATION_TYPES}
          name="category"
          placeholder="Categorie"
          defaultValue={TEMP_PUBLICATION_TYPES.find((option) => option.value === filters.Categorie)}
          isClearable
          {...{ register, errors, control }}
        />

        <Button type="submit" className={styles.button} disabled={isLoading}>
          <FontAwesomeIcon icon={!isLoading ? faMagnifyingGlass : faSpinner} /> {!isLoading && "Zoeken"}
        </Button>
      </form>

      <ResultsDisplaySwitch displayKey="landing-results" />
    </div>
  );
};
