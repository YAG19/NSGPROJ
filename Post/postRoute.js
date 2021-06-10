const router=require('express').Router({caseSensitive: true, strict:true});
const postController=require('../post/postController');

router.post('/',postController.createPost)

module.exports = router;