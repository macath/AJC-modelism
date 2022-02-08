const router = require('express').Router();
const newsController = require('../controllers/news.controller');

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

router.get('/', newsController.readNews);
router.post('/', upload.single('file'), newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;