# Image Service

A simple colection of image services for Cloud Architecture and API Architecture Classes 

## :rocket: Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## :gear: How to run

To install all dependencies: ```yarn```

To run in development mode: ```yarn dev```

To run in production mode: ```yarn build``` & ```yarn start```

## 🗃 ENV Files

### src/modules/compressing/services

#### .env

```env
NODE_ENV=development
CLODINATY_NAME=<cloudinary_name>
CLODINATY_API_KEY=<cloudinary_api_key>
CLODINATY_API_SECRET=<cloudinary_api_secret>
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