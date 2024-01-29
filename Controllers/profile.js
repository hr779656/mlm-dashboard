// IMPORT STATEMENT 
const db = require("../Models");


// USER REGISTERD SCHEMA 
const getProfile = db.userRegister;


const userProfile = async (req, res, next) => {
    const userId = req.params.id;
  
    try {
      const user = await getProfile.findByPk(userId);
  
      if (user) {
        console.log(user);
        // You can send the user data as a response to the client
        res.status(200).json(user);
      } else {
        console.log('User not found');
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { userProfile };