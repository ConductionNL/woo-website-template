import { generateYearsArray } from "../data/years";

export const filtersToQueryParams = (filters: any): string => {
  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) => !filterKeysToRemove.includes(key)),
  );

  const params = Object.entries(cleanedFilters)
    .map(([key, value]) => {
      if (!value) return null;

      if (typeof value === "string") {
        switch (key) {
          case "categorie":
            return `category=${value}`;
          default:
            return `${key}=${value}`;
        }
      }

      const formattedValue = Array.isArray(value)
        ? value.map((v: string) => v.replace(/\s+/g, "_")).join(`&${key}[]=`)
        : (value as string);

      return `${Array.isArray(value) ? `${key}[]` : key}=${formattedValue}`;
    })
    .filter(Boolean)
    .join("&");

  return params ? `&${params}` : "";
};

export const filtersToUrlQueryParams = (filters: Record<string, any>): string => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) => !filterKeysToRemove.includes(key)),
  );

  const params = Object.entries(cleanedFilters)
    .map(([key, value]) => {
      if (!value) return null;

      const formattedValue = Array.isArray(value)
        ? value.map((v: string) => v.replace(/\s+/g, "_")).join(`&${key}[]=`)
        : (value as string).replace(/\s+/g, "_");

      if (key == "published[after]") return;
      if (key == "published[before]")
        return `year=${
          generateYearsArray(currentYear - 1995).find((year: any) => {
            return year.before === value;
          })?.value
        }`;
      return `${Array.isArray(value) ? `${key}[]` : key}=${formattedValue}`;
    })
    .filter(Boolean)
    .join("&");

  return params ? `?${params}` : "";
};

const filterKeysToRemove: string[] = [];
