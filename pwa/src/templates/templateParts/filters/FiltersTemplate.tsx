import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import _ from "lodash";
import qs from "qs";
import { useForm } from "react-hook-form";
import { InputText, SelectSingle } from "@conduction/components";
import { IFiltersContext, defaultFiltersContext, useFiltersContext } from "../../../context/filters";
import { Button } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { generateYearsArray } from "../../../data/years";
import { TEMP_PUBLICATION_TYPES } from "../../../data/PublicationType";
import { useTranslation } from "react-i18next";
import { filtersToUrlQueryParams } from "../../../services/filtersToQueryParams";
import { navigate } from "gatsby";
import { useGatsbyContext } from "../../../context/gatsby";

interface FiltersTemplateProps {
  isLoading: boolean;
}

export const FiltersTemplate: React.FC<FiltersTemplateProps> = ({ isLoading }) => {
  const { t } = useTranslation();
  const { filters, setFilters } = useFiltersContext();
  const { gatsbyContext } = useGatsbyContext();
  const [queryParams, setQueryParams] = React.useState<IFiltersContext>(defaultFiltersContext);
  const filterTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const watcher = watch();

  const today = new Date();
  const currentYear = today.getFullYear();

  const url = gatsbyContext.location.search;
  const [, params] = url.split("?");
  const parsedParams = qs.parse(params);

  const handleSetFormValues = (params: any): void => {
    const basicFields: string[] = ["_search", "category"];
    basicFields.forEach((field) => setValue(field, params[field]));

    setValue(
      "year",
      generateYearsArray(currentYear - 1995).find((year: any) => {
        return year.value === params.year;
      }),
    );

    setValue(
      "category",
      TEMP_PUBLICATION_TYPES.find((option) => option.value === params.Categorie?.replace(/_/g, " ")),
    );
  };

  const onSubmit = (data: any) => {
    setFilters({
      _search: data._search,
      "Publicatiedatum[after]": data.year?.after,
      "Publicatiedatum[before]": data.year?.before,
      Categorie: data.category?.value,
    });
  };

  React.useEffect(() => {
    if (filterTimeout.current) clearTimeout(filterTimeout.current);

    filterTimeout.current = setTimeout(() => onSubmit(watcher), 500);
  }, [watcher]);

  React.useEffect(() => {
    if (_.isEmpty(parsedParams)) return;

    handleSetFormValues(parsedParams);
  }, []);

  React.useEffect(() => {
    //Prevents loop that puts user at top of page after scroll
    if (_.isEqual(filters, queryParams)) return;

    setQueryParams(filters);
    navigate(`/${filtersToUrlQueryParams(filters)}`);
  }, [filters]);

  return (
    <div id="filters" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputText
          name="_search"
          placeholder={`${t("Search")}..`}
          defaultValue={filters._search}
          ariaLabel={t("Enter search query")}
          {...{ register, errors }}
        />

        <SelectSingle
          options={generateYearsArray(currentYear - 1995)}
          name="year"
          placeholder={t("Year")}
          isClearable
          defaultValue={generateYearsArray(currentYear - 1995).find((year: any) => {
            return (
              year.after === filters["Publicatiedatum[after]"] && year.before === filters["Publicatiedatum[before]"]
            );
          })}
          {...{ register, errors, control }}
          ariaLabel={t("Select year")}
        />

        <SelectSingle
          options={TEMP_PUBLICATION_TYPES}
          name="category"
          placeholder={t("Category")}
          defaultValue={TEMP_PUBLICATION_TYPES.find((option) => option.value === filters.Categorie)}
          isClearable
          {...{ register, errors, control }}
          ariaLabel={t("Select category")}
        />

        <Button
          type="submit"
          className={styles.button}
          disabled={isLoading}
          aria-label={!isLoading ? t("Search") : t("Loading results")}
        >
          <FontAwesomeIcon icon={!isLoading ? faMagnifyingGlass : faSpinner} /> {!isLoading && t("Search")}
        </Button>
      </form>

      <ResultsDisplaySwitch displayKey="landing-results" />
    </div>
  );
};
