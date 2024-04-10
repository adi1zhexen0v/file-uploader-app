import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { getAllFiles, createFile } from "../controllers/file.controller.js";

const router = Router();

router.get("/", getAllFiles);
router.post("/", upload.single("file"), createFile);

export default router;
