const resolvePackageFile = (filePath) =>
  new URL(`../${filePath}`, import.meta.url).toString()

export default resolvePackageFile
