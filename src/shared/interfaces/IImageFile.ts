export default interface IImageFile {
  file: {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: Buffer
    path: String
  }
}