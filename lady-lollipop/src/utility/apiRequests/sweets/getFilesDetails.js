import apiCaller from "../apiCaller";

const FILE_SEPARATOR = ";";

const getFilesDetails = (filenamesAsString) => {
  const promisesArray = filenamesAsString
    .split(FILE_SEPARATOR)
    .map(async (filename) => {
      const fileUrl = `static/${filename}`;
      const response = await apiCaller.get(fileUrl);

      const size = response.headers["content-length"];
      const type = response.headers["content-type"];

      return { fileDetails: { name: filename, size, type }, fileUrl };
    });

  return Promise.all(promisesArray);
};

export default getFilesDetails;
