import { Router } from "express";
import multer from "multer"

import ImgurController from "../controllers/ImgurController"

const imgurRouter = Router()

const imgurController = new ImgurController()

const storage = multer.memoryStorage()
const upload = multer({ storage })

imgurRouter.post('/', upload.single('image'), imgurController.create)

export default imgurRouter
