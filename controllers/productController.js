const {getProducts,getProductsById,createProduct} = require('../services/productService')
const {saveCache,clearCache} = require('../middleware/cacheMiddleware')


async function getAllProducts(req,res){
    try{
        let data = await getProducts();
        saveCache(req.url,data)

        return res.json(data)
    }catch(err){
        console.log(err)
    }
}


async function getSpecificProduct(req,res){
    try{
        let id = Number(req.params.id);
        let specificData = await getProductsById(id)

        saveCache(req.url,specificData)
        res.json(specificData);
    } catch(err){
        console.log(err)
    }
}


async function postProduct(req,res){
    try{
        let product = req.body;

        let data = await createProduct(product);

        clearCache()
        res.json(data)
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllProducts,
    getSpecificProduct,
    postProduct
};