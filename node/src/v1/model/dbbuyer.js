const { format } = require('path');
const { users } = require('../library/db');
const functions = require('../library/functions.js');
const dateFormat = require("date-format");
class dbbuyer {
    constructor() {
    }
    
    async register(name, phoneno, gender, dob, password) {
        let functionsObj = new functions();
        let otp = functionsObj.getOtp();
        let user = {
            name,
            phoneno,
            gender,
            dob:dateFormat.parse("dd-MM-yyyy",dob),
            otp,
            password,
            is_creator: false,
            is_verified: false,
        };
        user = new users(user);
        await user.save()
            .then((data) => {
                functionsObj.sendOtp(phoneno, otp);
                return true;
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
    }



}
module.exports = dbbuyer;