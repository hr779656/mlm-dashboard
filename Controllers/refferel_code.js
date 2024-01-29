// IMPORT STATEMENT 
const db = require("../Models");


// USER REGISTERD SCHEMA 
const userRefferalCodes = db.usersCodes;


// VERIFY USER FUNCTION
const URF = async (req, res)=>{
    const {ref_codes} = req.body

    try{
        await userRefferalCodes.findAll({
            where: {
                ref_codes,
            }
        }).then((result)=>{
            console.log(result);
            // if(result.password == password){
            //   res.status(200).json({msg: "You lOgged In"})
            // }else{
            //   res.status(402).json({msg: "Invalid Password"})
            // }
        }).catch((err)=>{
            res.status(402).json({msg: "user not found"});
        })
      }catch(err){
        res.status(400).json({msg: err})
      }

}

module.exports = {URF}