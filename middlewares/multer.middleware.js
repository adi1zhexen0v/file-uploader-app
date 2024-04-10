import multer from "multer";
import { v4 as uuid } from "uuid";

function generateFilename(originalname) {
  const extension = originalname.split(".").at(-1);
  const randomName = uuid();
  return `${randomName}.${extension}`;
}

function filter(req, file, callback) {
  if (file.mimetype.includes("image")) {
    callback(null, true);
  } else {
    callback(null, false);
  }
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, generateFilename(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: filter,
});
