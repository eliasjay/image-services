import { Router } from "express";
import multer from "multer"

import CompressingController from "@modules/compressing/controllers/CompressingController";
import multerStorage from "@config/multerStorage";

const compressingRouter = Router()

const compressingController = new CompressingController()

const upload = multer({ storage: multerStorage })

compressingRouter.post('/', upload.single('image'), compressingController.create)

export default compressingRouter