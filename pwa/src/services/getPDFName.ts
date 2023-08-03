export const getPDFName = (url: string) => {
  const finalSlashIndex = url.lastIndexOf("/");
  const pdfName = url.substring(finalSlashIndex + 1);
  return pdfName;
};
