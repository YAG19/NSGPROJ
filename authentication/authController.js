const authServices=require('../authentication/authServices');

async function registerUser(req,res){
    try{
    const data=await authServices.registerUser(req.body);
    res.status(200).json(data);
    }
    catch(error){
        console.log(error);
         res.status(500).json(error);
    }
}

module.exports={
    registerUser
};