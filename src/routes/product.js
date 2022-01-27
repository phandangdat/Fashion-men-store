const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.post('/bill', productController.bill);
router.get('/:category', productController.category);
router.get('/:category/:subCategory', productController.subCategory);
router.get('/:category/:subCategory/:name', productController.show);

module.exports = router;
