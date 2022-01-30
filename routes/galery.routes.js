const router = require('express').Router();
const galeryController = require('../controllers/galery.controller');

const multer = require('multer');
const imageStorage = multer.diskStorage({
    destination: `${__dirname}/../client/public/uploads/galery/`,
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
});
const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
          cb(null, true);
        }
        else {
          cb(new multer.MulterError('mauvais format de document'));
        }
      },
    storage: imageStorage
});

router.get('/', galeryController.readGalery);
router.post('/', upload.single('file'), galeryController.createGalery)
router.put('/:id', galeryController.updateGalery);
router.delete('/:id', galeryController.deleteGalery);

module.exports = router;