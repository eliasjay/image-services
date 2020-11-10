import { Router } from 'express'

import EXIFRouter from '@modules/exif/routes/exif.routes'
import ImgurRouter from "@modules/imgur/routes/imgur.routes";
import compressingRouter from '@modules/compressing/routes/compressing.routes';

const routes = Router()

routes.use('/exif', EXIFRouter)
routes.use('/imgur', ImgurRouter)
routes.use('/compressing', compressingRouter)

export default routes
