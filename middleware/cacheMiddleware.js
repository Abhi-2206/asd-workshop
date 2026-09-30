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
        res.set("X-Cache","HIT")
        return res.json(value)
    }

    res.set("X-Cache","MISS")
    next()
}

module.exports = {cacheMiddleware,saveCache}