import * as React from "react";
import * as styles from "./FiltersTemplate.module.css";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import _ from "lodash";
import qs from "qs";
import Skeleton from "react-loading-skeleton";
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
import { useFilterCount } from "../../../hooks/filterCount";

interface FiltersTemplateProps {
  isLoading: boolean;
}

export const FiltersTemplate: React.FC<FiltersTemplateProps> = ({ isLoading }) => {
  const { t } = useTranslation();
  const { filters, setFilters } = useFiltersContext();
  const { gatsbyContext } = useGatsbyContext();
  const [queryParams, setQueryParams] = React.useState<IFiltersContext>(defaultFiltersContext);
  const [categoryParams, setCategoryParams] = React.useState<any>();
  const [categoryOptions, setCategoryOptions] = React.useState<any>();
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
      generateYearsArray(currentYear - 2021).find((year: any) => {
        return year.value === params.year;
      }),
    );
  };

  const handleSetSelectFormValues = (params: any): void => {
    getItems.isSuccess &&
      setValue(
        "category",
        categoryOptions.find((option: any) => option.value === params.Categorie?.replace(/_/g, " ")),
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
    setCategoryParams(parsedParams);
    handleSetFormValues(parsedParams);
  }, []);

  React.useEffect(() => {
    if (_.isEmpty(categoryOptions)) return;
    if (_.isEmpty(categoryParams)) return;

    handleSetSelectFormValues(categoryParams);
  }, [categoryOptions]);

  React.useEffect(() => {
    //Prevents loop that puts user at top of page after scroll
    if (_.isEqual(filters, queryParams)) return;

    setQueryParams(filters);
    navigate(`/${filtersToUrlQueryParams(filters)}`);
  }, [filters]);

  const getItems = useFilterCount().getCategoryCount();

  React.useEffect(() => {
    if (!getItems.isSuccess) return;

    const categoriesWithData = getItems.data.Categorie.map((test: any) => {
      return TEMP_PUBLICATION_TYPES?.find((option) => {
        return option.value === test._id.toLowerCase();
      });
    });

    setCategoryOptions(Array.from(new Set(categoriesWithData)));
  }, [getItems.isSuccess]);

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
          options={generateYearsArray(currentYear - 2021)}
          name="year"
          placeholder={t("Year")}
          isClearable
          defaultValue={generateYearsArray(currentYear - 2021).find((year: any) => {
            return (
              year.after === filters["Publicatiedatum[after]"] && year.before === filters["Publicatiedatum[before]"]
            );
          })}
          {...{ register, errors, control }}
          ariaLabel={t("Select year")}
        />

        {getItems.isLoading && <Skeleton height="50px" />}
        {getItems.isSuccess && (
          <SelectSingle
            options={categoryOptions}
            name="category"
            placeholder={t("Category")}
            defaultValue={TEMP_PUBLICATION_TYPES.find((option) => option.value === filters.Categorie)}
            isClearable
            disabled={getItems.isLoading}
            {...{ register, errors, control }}
            ariaLabel={t("Select category")}
          />
        )}

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
