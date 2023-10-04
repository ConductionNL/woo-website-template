export const getPDFName = (url: string) => {
  if (!url) return;

  const finalSlashIndex = url.lastIndexOf("/");
  const pdfName = url.substring(finalSlashIndex + 1);
  return pdfName;
};
