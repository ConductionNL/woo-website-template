export const generateYearsArray = (amountOfYears: number) => {
  const currentYear = new Date().getFullYear();

  const yearsArray = [];

  for (let i = 0; i < amountOfYears; i++) {
    const year = currentYear - i;
    const beforeDate = `${year + 1}-01-01T00:00:00Z`;
    const afterDate = `${year - 1}-12-31T23:59:59Z`;

    yearsArray.push({
      label: `${year}`,
      value: `${year}`,
      before: beforeDate,
      after: afterDate,
    });
  }

  return yearsArray;
};
