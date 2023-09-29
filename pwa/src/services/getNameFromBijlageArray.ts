export const getNameFromBijlageArray = (url: string, array: any[]) => {
  if (!array) return;
  const bijlage = array.find((option) => {
    return option.URL_Bijlage === url;
  });

  return bijlage?.Titel_Bijlage;
};
