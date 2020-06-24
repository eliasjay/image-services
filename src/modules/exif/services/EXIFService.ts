import exif from 'exif-parser'

import AppError from '@shared/errors/AppError'

interface IImage {
  image: Buffer
}

class EXIFService {
  public async execute({ image }: IImage): Promise<Object> {
    if (!image) {
      throw new AppError('Could not upload your image')
    }

    const imageMetadata = exif.create(image).parse()

    return imageMetadata
  }
}

export default EXIFService
