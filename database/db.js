const DB_USER = process.env.DB_USER;
const PASSWORD = encodeURIComponent(process.env.PASSWORD); 
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/products`;
const mongoose=require('mongoose');
//const user = require('../database/DatabaseSchema/user.js');

function connectToDatabase() {

    return mongoose.connect(DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true  }); //.then(() => {
}      

        /////////create user
//         const userObject={
//             firstName:"kuldip",
//             lastName:"Sah",
//             email: "kuldipkumarsah112@gmail.com",
//             DOB: "04/06/1999",
//             password: "Kullu@123",
//             phoneNo: "",
//             address: {type: String},
//             createdAt: {type: Date, default: Date.now},
//             updatedAt: {type: Date, default: Date.now}
//         };
//         user.create(userObject).then(response=>{
//             console.log(response);
//         }).catch(error=>{
//             console.log(error);
//         })
        
//     }).catch((err) => {
//         console.log(err);
//     });
// }
module.exports={connectToDatabase};
