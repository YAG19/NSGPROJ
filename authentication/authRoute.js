const router=require('express').Router({caseSensitive: true, strict:true});
const authController=require('../authentication/authController');


router.post('/register',authController.registerUser); 
module.exports = router;