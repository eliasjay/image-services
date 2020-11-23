import GreyscaleService from "@modules/greyscale/services/GreyscaleService";
import IImageFile from "@shared/interfaces/IImageFile";
import { Response } from "express";

class GreyscaleController {
  public async create(request: IImageFile, response: Response): Promise<any> {
    const image = request.file.path

    const greyscaleService = new GreyscaleService()

    const cloudinaryImage = await greyscaleService.execute(image)

    return response.json(cloudinaryImage.secure_url)
  }
}

export default GreyscaleController