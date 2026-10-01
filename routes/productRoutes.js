const express = require('express')

const {
    getAllProducts,
    getSpecificProduct,
    postProduct,
    putProduct
    } = require('../controllers/productController')

const {cacheMiddleware} = require('../middleware/cacheMiddleware')

const router = express.Router()


router.get('/products',cacheMiddleware,getAllProducts);

router.get('/products/:id',cacheMiddleware,getSpecificProduct);

router.post('/products',postProduct)

router.put('/products/:id',putProduct)


module.exports = router;