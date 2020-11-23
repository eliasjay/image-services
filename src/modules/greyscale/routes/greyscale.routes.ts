import { Router } from "express";
import multer from "multer";

import GreyscaleController from "@modules/greyscale/controllers/GreyscaleController"
import multerStorage from "@config/multerStorage";

const greyscaleRouter = Router()

const greyscaleController = new GreyscaleController()

const upload = multer({ storage: multerStorage })

greyscaleRouter.post('/', upload.single("image"), greyscaleController.create)

export default greyscaleRouter