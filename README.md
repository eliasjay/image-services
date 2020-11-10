# Image Services

A simple colection of image services for Cloud Architecture and API Architecture Classes 

## :rocket: Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Imgur API](https://apidocs.imgur.com/)
- [Cloudinary API](https://cloudinary.com/documentation/image_upload_api_reference)

## :gear: How to run

To install all dependencies: ```yarn```

To run in development mode: ```yarn dev```

To run in production mode: ```yarn build``` & ```yarn start```

## 🗃 ENV Files

### src/modules/compressing/services

#### .env

```env
NODE_ENV=development
CLOUDINARY_NAME=<cloudinary_name>
CLOUDINARY_API_KEY=<cloudinary_api_key>
CLOUDINARY_API_SECRET=<cloudinary_api_secret>
```

### src/modules/imgur/services

#### .env

```env
NODE_ENV=development
CLIENT_ID=<imgur_client_id>
CLIENT_SECRET=<imgur_client_secret>
```

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.
