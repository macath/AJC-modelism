const router = require('express').Router();
const galleryController = require('../controllers/gallery.controller');

const multer = require('multer');
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
  }
});
const upload = multer({
  limits: {
    fileSize: 10000000  // 10Mo
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

router.get('/', galleryController.readGallery);
router.post('/', upload.single('file'), galleryController.createGallery)
router.put('/:id', galleryController.updateGallery);
router.delete('/:id', galleryController.deleteGallery);

module.exports = router;