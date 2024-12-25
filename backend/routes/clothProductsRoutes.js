const express = require('express');
const router = express.Router();

const {createProduct, getAllProducts, deleteProduct} = require('../controllers/clothController');

router.post('/create', createProduct);
router.get('/product', getAllProducts);
router.delete('/:id', deleteProduct);

module.exports = router;