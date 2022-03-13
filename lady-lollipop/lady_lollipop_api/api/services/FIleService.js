import fs from "fs";

const FILE_SEPARATOR = ";";
const fileDir = `${__dirname}/../../public/files/`;

const FileService = {
  uploadFiles: async (files) => {
    const names = files.map((file) => {
      const filename = `sweets_${new Date().getTime()}_${file.name}`;
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir);
      }

      fs.writeFileSync(fileDir + filename, file.data);

      return filename;
    });

    return names.join(FILE_SEPARATOR);
  },
  deleteFiles: (filenames) => {
    filenames.forEach((filename) => fs.unlinkSync(fileDir + filename));
  },
};

export default FileService;
