export const filtersToQueryParams = (filters: any): string => {
  Object.keys(filters)
    .filter((key) => filterKeysToRemove.includes(key))
    .forEach((key) => {
      delete filters[key];
    });

  let params: string = "";

  for (const [key, value] of Object.entries(filters)) {
    if (!value) continue;

    if (typeof value === "string") {
      params += `&${key}=${value}`;
    }

    if (Array.isArray(value)) {
      let arrayParams = "";

      value.forEach((value) => {
        arrayParams += `&${key}[]=${value}`;
      });

      params += arrayParams;
    }
  }

  return params;
};

export const filtersToUrlQueryParams = (filters: any): string => {
  Object.keys(filters)
    .filter((key) => filterKeysToRemove.includes(key))
    .forEach((key) => {
      delete filters[key];
    });

  let params: string = "";

  var first_iteration = true;
  for (const [key, value] of Object.entries(filters)) {
    if (!value) continue;

    if (first_iteration) {
      if (typeof value === "string") {
        params += `?${key}=${value.replace(/\s+/g, "_")}`;
      }

      if (Array.isArray(value)) {
        let arrayParams = "";

        value.forEach((value) => {
          arrayParams += `?${key}[]=${value.replace(/\s+/g, "_")}`;
        });

        params += arrayParams;
      }

      first_iteration = false;
    } else {
      if (typeof value === "string") {
        params += `&${key}=${value.replace(/\s+/g, "_")}`;
      }

      if (Array.isArray(value)) {
        let arrayParams = "";

        value.forEach((value) => {
          arrayParams += `&${key}[]=${value.replace(/\s+/g, "_")}`;
        });

        params += arrayParams;
      }
    }
  }

  return params;
};

const filterKeysToRemove: string[] = [];
