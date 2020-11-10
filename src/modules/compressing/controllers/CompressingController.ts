import CompressingService from "@modules/compressing/services/CompressingService";
import IImageFile from "@shared/interfaces/IImageFile";
import { Response } from "express";


class CompressingController {
  public async create(request: IImageFile, response: Response): Promise<any> {    
    const image = request.file.path
    
    const compressingService = new CompressingService()

    const cloudinaryImage = await compressingService.execute(image)

    return response.json(cloudinaryImage.secure_url)
  }
}

export default CompressingController