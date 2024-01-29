// IMPORT STATEMENT 
const db = require("../Models");

// USER REGISTERD SCHEMA 
const userRegister_schema = db.userRegister;
const usersCodes = db.usersCodes

// USER REGISTER IN DATA BASE
const registerUser = async (req, res) => {
    let { name, email, password, ref_code } = req.body;

    name = name.trim().toLowerCase();
    email = email.trim().toLowerCase();
    password = password.trim().toLowerCase();
    ref_code = ref_code.trim();

    function code_generator() {
        // Generate a random 5-digit code
        const randomCode = Math.floor(10000 + Math.random() * 90000);
        return randomCode;
    }

    let user_code = code_generator();

    try {
        const registeredUser = await userRegister_schema.create({
            name,
            email,
            password,
            ref_code,
            user_code
        });

        const createdUserCode = await usersCodes.create({
            reg_id: registeredUser.id,
            usercode: registeredUser.user_code
        });

        res.status(200).json({
            msg: "User Register Successfully in Database",
            user_code: createdUserCode.usercode
        });
    } catch (err) {
        res.status(402).json({ msg: err.message || "Failed to register user" });
    }
};


module.exports = {registerUser}