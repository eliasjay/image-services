import * as dotenv from "dotenv"

import axios from "axios";

dotenv.config({ path: __dirname + '/.env' })

class ImgurService {
  public async execute(image: Buffer): Promise<any> {
    return await axios({
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      headers: { 
        'Authorization': `Client-ID ${process.env.CLIENT_ID}`
      },
      data : image
    })
  }
}

export default ImgurService