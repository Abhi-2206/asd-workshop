let cache = {}

function checkCache(key){
    return cache[key]
}
function saveCache(key,data){
    cache[key] = data;
}

function cacheMiddleware(req,res,next){

    let key = req.url
    let value = checkCache(key)

    if(value){
        console.log('cache worked')
        return res.json(value)
    }
    next()
}

module.exports = {cacheMiddleware,saveCache}