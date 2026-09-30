const express = require('express')

const {getAllProducts,getSpecificProduct,postProduct} = require('../controllers/productController')

const {cacheMiddleware} = require('../middleware/cacheMiddleware')

const router = express.Router()


router.get('/products',cacheMiddleware,getAllProducts);

router.get('/products/:id',cacheMiddleware,getSpecificProduct);

router.post('/products',postProduct)


module.exports = router;