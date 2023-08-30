export const generateYearsArray = (amountOfYears: number) => {
  const currentYear = new Date().getFullYear();

  const yearsArray = [];

  for (let i = 0; i < amountOfYears; i++) {
    const year = currentYear - i;
    const beforeDate = `${year + 1}-01-01`;
    const afterDate = `${year - 1}-12-31`;

    yearsArray.push({
      label: `${year}`,
      value: `${year}`,
      before: beforeDate,
      after: afterDate,
    });
  }

  return yearsArray;
};
