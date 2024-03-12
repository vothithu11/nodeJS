const express =require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
router.get('/create', productController.create);
router.get('/:name', productController.show);
router.post('/store', productController.store);



module.exports = router;