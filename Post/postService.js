const postModel = require('../database/DatabaseSchema/post')

function createPost(data){
    return postModel.create(data)
}

module.exports = {
    createPost
}