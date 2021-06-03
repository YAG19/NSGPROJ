const router=require('express').Router({caseSensitive: true, strict:true});
const authController=require('../authentication/authController');


router.post('/register',authController.registerUser); 

router.get('/login',authController.login);

router.get('/forgotPassword',authController.generateResetPasswordLink)

router.put('/resetPassword',authController.resetPassword)

module.exports = router;