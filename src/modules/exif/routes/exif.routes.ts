import { Router } from 'express'
import multer from 'multer'

import EXIFController from '../controllers/EXIFController'

const exifRouter = Router()

const exifController = new EXIFController()

const storage = multer.memoryStorage()
const upload = multer({ storage })

exifRouter.post('/', upload.single('image'), exifController.create)

export default exifRouter
