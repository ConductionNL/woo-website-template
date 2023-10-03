export const getBijlageTitleFromURL = (url: string, bijlagen: any[]): string | undefined => {
  return bijlagen.find((bijlage) => bijlage.URL_Bijlage === url)?.Titel_Bijlage;
};
