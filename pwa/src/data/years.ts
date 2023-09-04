export const generateYearsArray = (amountOfYears: number) => {
  const today = new Date();

  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const _currentDate = today.getDate();
  const currentDate = currentYear + "-" + currentMonth + "-" + _currentDate;

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

  yearsArray[0].before = currentDate;

  return yearsArray;
};
