const express = require('express')

const {getAllProducts,getSpecificProduct} = require('../controllers/productController')

const router = express.Router()


router.get('/products',getAllProducts);

router.get('/products/:id',getSpecificProduct);


module.exports = router;