import { Router } from 'express'

import EXIFRouter from '@modules/exif/routes/exif.routes'

const routes = Router()

routes.use('/exif', EXIFRouter)

export default routes
