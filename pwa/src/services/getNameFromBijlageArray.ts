export const getBijlageTitleFromURL = (url: string, bijlagen: any[]): string | undefined => {
  if (bijlagen === undefined) return undefined;
  return bijlagen.find((bijlage) => bijlage.URL_Bijlage === url)?.Titel_Bijlage;
};
