var {users} = require("../library/db");
var functions = require("../library/functions");
class dbcreator {
    constructor(){}

    /**
     * 
     * @param name 
     * @param phoneno 
     * @param gender 
     * @param dob 
     * @param password 
     * @returns 
     */
    async register(name, phoneno, gender, dob, password, college, course, email, city, state, country, pincode, proof_image='')
    {
        let functionsObj = new functions();
        let otp = functionsObj.getOtp();
        let user = {
            name,
            phoneno, 
            gender,
            dob:new Date(),
            otp,
            password,
            college,
            course,
            email,
            city,
            state,
            country,
            pincode,
            proof_image,
            is_creator:false,
            is_verified:false,
        };
        user = new users(user);
        let result = await user.save((err,data)=>{
            if(err) throw err;
            // functionsObj.sendOtp(phoneno, otp);
        });
        return result;
    }
}
module.exports = dbcreator;