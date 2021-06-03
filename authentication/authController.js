const { query } = require('express');
const authServices =  require('./authService');

async function registerUser(req,res){
    try{
    const data = await authServices.registerUser(req.body);
    res.status(200).json(data);
    }
    catch(error){
        console.log(error);
         res.status(500).json(error);
    }
}



async function login(req,res){
    try{

        let queryData = req.query;
        console.log(queryData)
        const response = await authServices.userLogin(queryData);
        console.log("resppose "+ response)

        if(response){
            res.status(200).json({message:"Authentication succesful"})
        }
        
    }
    catch(error){
        res.status(500).json(error)
    }
}

async function generateResetPasswordLink(req,res){
    console.log(req.query)
    
    try{
                await authServices.generateResetPasswordLink(req.query.email);
                res.status(200).json({ message : "Reset link generated"});
    }
    catch(error){
        res.status(500).json(error)
    }
}


async function resetPassword(req,res){
    
    try{
                // await authServices.generateResetPasswordLink(req.query.email);
                // res.status(200).json()
                console.log(req.body);
               
    }
    catch(error){
        res.status(500).json(error)
    }

    }




module.exports={
    registerUser,
    login,
    generateResetPasswordLink,
    resetPassword
};