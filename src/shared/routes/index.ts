import { Router } from 'express'

import EXIFRouter from '@modules/exif/routes/exif.routes'
import ImgurRouter from "@modules/imgur/routes/imgur.routes";

const routes = Router()

routes.use('/exif', EXIFRouter)
routes.use('/imgur', ImgurRouter)

export default routes
