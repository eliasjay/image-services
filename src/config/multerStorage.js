const fs = require('fs');
const path = require('path');
const multer = require('multer');

const uploadFolder = path.join(__dirname, '..', 'uploads');

const multerStorage = multer.diskStorage({
	destination: async (req, file, cb) => {
		try {
			if (!fs.existsSync(uploadFolder))
				fs.mkdirSync(uploadFolder);

			let _path = uploadFolder;

			if (!fs.existsSync(_path))
				fs.mkdirSync(_path);

			cb(null, _path);
		} catch (error) {
			cb(error, null);
		}
	},
	filename: (req, file, cb) => {
		const time = new Date().getTime();
		cb(null, `${time}${path.extname(file.originalname)}`);
	}
});

module.exports = multerStorage