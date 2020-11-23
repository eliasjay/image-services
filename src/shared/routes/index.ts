import { Router } from 'express'

import EXIFRouter from '@modules/exif/routes/exif.routes'
import ImgurRouter from "@modules/imgur/routes/imgur.routes";
import compressingRouter from '@modules/compressing/routes/compressing.routes';
import greyscaleRouter from '@modules/greyscale/routes/greyscale.routes';

const routes = Router()

routes.use('/exif', EXIFRouter)
routes.use('/deleting', ImgurRouter)
routes.use('/compressing', compressingRouter)
routes.use('/greyscale', greyscaleRouter)

export default routes
