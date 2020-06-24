import AppError from '@shared/errors/AppError'

interface Image {
  image: Buffer
}

class EXIFService {
  public async execute({ image }: Image): Promise<Buffer> {
    if (!image) {
      throw new AppError('Could not upload your image')
    }

    return image
  }
}

export default EXIFService
