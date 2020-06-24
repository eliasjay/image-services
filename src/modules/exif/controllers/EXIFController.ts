import { Response } from 'express'

import IImageFile from '@shared/interfaces/IImageFile'
import EXIFService from '../services/EXIFService'

class EXIFController {
  public async create(request: IImageFile, response: Response): Promise<Response> {
    const image = request.file.buffer

    const exifService = new EXIFService()
    
    const imageMetadata = await exifService.execute({ image })

    return response.json(imageMetadata)
  }
}

export default EXIFController
