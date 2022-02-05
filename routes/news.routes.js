const router = require('express').Router();
const newsController = require('../controllers/news.controller');

const multer = require('multer');
const imageStorage = multer.diskStorage({
    destination: `${__dirname}/../client/public/uploads/news/`,
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

router.get('/', newsController.readNews);
router.post('/', upload.single('file'), newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

router.get('/admin/news', newsController.readNews);

module.exports = router;