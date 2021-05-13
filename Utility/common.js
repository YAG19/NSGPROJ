const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

function encryptPassword(plainPassword){
    return  bcrypt.hash(plainPassword, 10);

}

function generateToken(){
    return jwt.sign( {} , SECRET_KEY)
}

function verifyToken(token){
    return jwt.verify(token,SECRET_KEY);
}

module.exports={
    encryptPassword,
    generateToken,
    verifyToken
}