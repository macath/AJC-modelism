const router = require('express').Router();
const newsController = require('../controllers/news.controller');
const multer = require('multer');
const upload = multer();

router.get('/', newsController.readNews);
router.post('/', upload.single('file'), newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;