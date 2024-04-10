import { File } from "../models/File.js";

export async function getAllFiles(req, res) {
  try {
    const files = await File.find();
    if (!files) {
      return res.status(404).json({ message: "Files not found!" });
    }

    res.json(files);
  } catch (error) {
    res.json({ message: error.toString() });
  }
}

export async function createFile(req, res) {
  try {
    const { name } = req.body;

    if (!req.file) {
      res.status(400).json({ message: "You did not upload file" });
    }

    const { filename } = req.file;
    const newFile = await new File({ name, fileUrl: filename }).save();
    res.json(newFile);
  } catch (error) {
    res.json({ message: error.toString() });
  }
}
