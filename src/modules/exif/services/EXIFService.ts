import AppError from '@shared/errors/AppError'

interface Image {
  file: Buffer
}

class EXIFService {
  public async execute({ file }: Image): Promise<Buffer | void> {
    return file
  }
}

export default EXIFService
