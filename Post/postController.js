const postService = require('../Post/postService')

async function createPost(req,res,next){
    try{
        let post = await postService.createPost(req.body)
        res.status(200).json({
            post
        }) 
    }catch(error){
        console.log(error)
    }
}

module.exports = {createPost}