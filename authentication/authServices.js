const user = require('../database/DatabaseSchema/user');
const commanLib = require('../Utility/common.js')
const emailService = require('../Utility/emailService.js')



async function registerUser(userDetails){


    const isuserExists = await isUserExists(userDetails.email);
    if(isuserExists.length > 0){
        throw "user alraedy Exists";
    }

    
    let response=await testPassword(userDetails.password);
    if(!response){
        throw "Password is in invalid format";
    }
    let mailCheck = await testEmail(userDetails.email);
    if(!mailCheck){
        throw "Email is not valid";
    }
    else{
        const token = commanLib.generateToken();
        const emailResponse = await emailService.sendEmail('yagnesh.patel9898@gmail.com', token) ;
        console.log(emailResponse)
    }

    // const token = commanLib.generateToken();
    // console.log(token)
  
    // const isVerified = commanLib.verifyToken(token)
    // console.log(isVerified)
  
    const encryptedPassword = await commanLib.encryptPassword(userDetails.password);
    userDetails.password = encryptedPassword;
    const result = await user.create(userDetails);
    console.log(result);
    // const token = commanLib.generateToken();

    // const emailResponse = await emailService.sendEmail('yagnesh.patel9898@gmail.com', token) ;
    // console.log(emailResponse);

    
    return result;
}


async function isUserExists(email){
    return await user.find( {email:email} ).lean();

}

async function testPassword(password) {
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
} 
async function testEmail(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
} 

module.exports={
    registerUser
};