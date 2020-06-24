import { Request, Response } from 'express'

import EXIFService from '../services/EXIFService'

class EXIFController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { image } = request.file.buffer

    console.log(image);

    const exifService = new EXIFService()
    
    const imageMetadata = await exifService.execute({ file: image })

    return response.json({ imageMetadata })
  }
}

export default EXIFController
