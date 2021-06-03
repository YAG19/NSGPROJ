const user = require('../database/DatabaseSchema/user');
const commonLib = require('../Utility/common')
const emailService = require('../Utility/emailService.js')



async function registerUser(userDetails) {


    const isuserExists = await isUserExists(userDetails.email);
    if (isuserExists.length > 0) {
        throw "user alraedy Exists";
    }


    let response = await testPassword(userDetails.password);
    if (!response) {
        throw "Password is in invalid format";
    }


    // let mailCheck = await testEmail(userDetails.email);
    // if(!mailCheck){
    //     throw "Email is not valid";
    // }
    // else{
    //     const token = commanLib.generateToken();
    //     // const emailResponse = await emailService.sendEmail('yagnesh.patel9898@gmail.com', token) ;
    //     // console.log(emailResponse)
    // }

    // const token = commanLib.generateToken();
    // console.log(token)

    // const isVerified = commanLib.verifyToken(token)
    // console.log(isVerified)

    const encryptedPassword = await commonLib.encryptPassword(userDetails.password);
    userDetails.password = encryptedPassword;
    const result = await user.create(userDetails);
    // console.log(result);
    // const token = commanLib.generateToken();

    // const emailResponse = await emailService.sendEmail('yagnesh.patel9898@gmail.com', token) ;
    // console.log(emailResponse);


    return result;
}


async function isUserExists(email) {
    // return await user.find({ email: email }).lean();
    return user.findOne({ "email": email }).lean();
}

async function testPassword(password) {
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
}
async function testEmail(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}


async function userLogin(params) {
    // console.log(params)

    if (params.email && params.password) {

        const userDetail = await isUserExists(params.email);
        console.log("USER DETAILS:" + userDetail.email,userDetail.password)

        if (userDetail) {

            console.log("User password " + userDetail.password)
            let isPasswordSame = await commonLib.decryptPassword(params.password, userDetail.password);

            if (isPasswordSame) {
                return true;
            } else {
                throw 'Password is invalid';
            }

        } else {
            throw 'User does not exists';
        }

    } else {

        throw 'Email and Password is mandatory';
    }

}


async function generateResetPasswordLink(email) {

    const userDetail = await isUserExists(email);
    // console.log(userDetail)
    
    if (userDetail) {
        const token = commonLib.generateToken();
        
        console.log( "email Responese" + token)

        const message = "Your reset password link is:" + 'http://localhost:3000/resetPassword?' + token;
        const emailResponse = await emailService.sendEmail('yagnesh.patel9898@gmail.com',  message);


    } else {
        throw 'Email does not exists'
    }
}



module.exports = {
    registerUser,
    isUserExists,
    testPassword,
    userLogin,
    generateResetPasswordLink
};