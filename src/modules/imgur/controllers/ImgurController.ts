import { Response } from "express";

import IImageFile from "@shared/interfaces/IImageFile";
import ImgurService from "../services/ImgurService";

class ImgurController {
  public async create(request: IImageFile, response: Response): Promise<any> {
    const image = request.file.buffer

    const imgurService = new ImgurService()

    imgurService.execute(image).then((img) => {
      return response.json(img.data.data.link)
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export default ImgurController