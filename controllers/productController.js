const {getProducts,getProductsById} = require('../services/productService')


async function getAllProducts(req,res){
    try{
        let data = await getProducts();
        return res.json(data)
    }catch(err){
        console.log(err)
    }
}


async function getSpecificProduct(req,res){
    try{
        let id = Number(req.params.id);
        let specificData = await getProductsById(id)
        res.json(specificData);
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllProducts,
    getSpecificProduct
};