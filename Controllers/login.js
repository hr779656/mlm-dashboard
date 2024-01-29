// IMPORT STATEMENT 
const db = require("../Models");


// USER REGISTERD SCHEMA 
const verifyUser = db.userRegister;


// VERIFY USER FUNCTION
const isUserExist = async (req, res, next)=>{
   let {email, password} = req.body;

   email = email.trim().toLowerCase();
   password = password.trim().toLowerCase();

    try{
        await verifyUser.findOne({
            where: {
                email,
            }
        }).then((result)=>{
            if(result.password == password){
              res.status(200).json({msg: "You lOgged In"})
            }else{
              res.status(402).json({msg: "Invalid Password"})
            }
        }).catch((err)=>{
            res.status(402).json({msg: "user not found"})
        })
      }catch(err){
        res.status(400).json({msg: err})
      }

}

module.exports = {isUserExist}