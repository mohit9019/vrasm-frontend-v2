const functions = require("../library/functions");
const { users, transactions } = require("../library/db");
const req = require("express/lib/request");
const mongoose = require("mongoose");

class dbusers {
    constructor() { }

    async login(email, password) {
        let functionsObj = new functions();
        let result = await users.findOne({ email, password }).exec();
        if (result != null) {
            delete result._doc['password'];
            result._doc['user_id'] = result._doc['_id'];
            return { error: false, data: { ...result._doc, accesstoken: functionsObj.generateToken(result._doc._id) } }
        }
        else
            return { error: true }
    }

    async getProfile(user_id) {
        let functionsObj = new functions();
        let result = await users.findOne({ _id: mongoose.Types.ObjectId(user_id) }).exec();
        if (result != null) {
            delete result._doc['password'];
            result._doc['user_id'] = result._doc['_id'];
            return { error: false, data: { ...result._doc, accesstoken: functionsObj.generateToken(result._doc._id) } }
        }
        else
            return { error: true }
    }

    async setProfile(user_id, name, city, address, pincode) {
        let functionsObj = new functions();
        console.log(city, address);
        // let result = await users.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(user_id) }, { name, city, address, pincode });
        let result = await users.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(user_id) }, { name, city, address, pincode }, { new: true });
        if (result != null) {
            delete result._doc['password'];
            result._doc['user_id'] = result._doc['_id'];
            return { error: false, data: { ...result._doc, accesstoken: functionsObj.generateToken(result._doc._id) } }
        }
        else
            return { error: true }
    }

    async changePassword(user_id, old_password, new_password) {
        let functionsObj = new functions();
        let result = await users.findOneAndUpdate({ _id: mongoose.Types.ObjectId(user_id), password: old_password }, { password: new_password });
        if (result != null) {
            delete result._doc['password'];
            result._doc['user_id'] = result._doc['_id'];
            return { error: false, message: 'Password Updated successfully', data: { ...result._doc, accesstoken: functionsObj.generateToken(result._doc._id) } }
        }
        else
            return { error: true, message: 'Wrong Old Password' }
    }

    async register(data, is_creator = false) {
        let functionsObj = new functions();
        let otp = functionsObj.generateOtp();


        let data1 = {
            name: data.name,
            email: data.email,
            gender: data.gender,
            otp,
            password: data.password,
            is_creator: 0,
            is_verified: false,
            created_date: new Date()
        };

        console.log(otp)
        if (is_creator) {
            user['is_creator'] = 1;
            user['course'] = data.course;
            user['college'] = data.college;
        }


        // check if user is already exists or not.
        let userData = await users.findOne({ "email": data.email });
        if (userData) {
            if (userData.is_verified == false) {
                await users.deleteOne({ "email": data.email, is_verified: false });
            } else {
                return { error: true, message: "Email already exists" }
            }
        }


        let return_data = {
            error: false,
            message: 'success'
        };

        let user = new users(data1);
        return user.save()
            .then(async () => {
                let text = `Dear ${data.name}, Here is your OTP to register on VRASM Templates is ${otp}`;
                let result = await functionsObj.sendEmail(data.email, "OTP from VRASM", text);
                console.log(result);
                return return_data;
            })
            .catch((err) => {
                console.log('err', err);
                return_data.message = err.errors?.email ? 'duplicate_email' : 'something_broken';
                return_data.error = true;
                return return_data;
            })

    }

    async users() {
        let return_data = {
            error: false,
            message: 'success',
            data: []
        }
        return users.find()
            .then(result => {
                return_data.data = result;
                return return_data;
            })
            .catch(err => {
                console.log(err);
                return_data.error = true;
                return_data.message = 'something_broken';
                return return_data;
            })
    }

    async verifyOtp(email, otp) {
        let return_data = {
            error: false,
            message: 'otp verified successfully',
            data: {}
        }
        let functionsObj = new functions();
        return users.findOneAndUpdate({ email: email, otp: otp }, { is_verified: true })
            .then(data => {
                if (data == null) {
                    return_data.error = true;
                    return_data.message = 'wrong otp';
                    return return_data;
                }
                else {
                    delete data._doc['password'];
                    data._doc['user_id'] = data._doc['_id'];
                    data._doc['accesstoken'] = functionsObj.generateToken(data._doc._id);
                    return_data.data = data._doc;
                    return return_data;
                }
            })
            .catch(err => {
                console.log('err', err);
                return_data.error = true;
                return_data.message = 'something_broken';
                return return_data;
            })
    }

    async myOrders(user_id) {
        let return_data = {
            error: false,
            message: 'success',
            data: []
        };
        // let result = transactions.find({user_id: mongoose.Types.ObjectId(user_id)});
        let result = await transactions.aggregate([
            {
                $lookup: {
                    from: 'templates',
                    localField: 'template_id',
                    foreignField: '_id',
                    as: 'template'
                }
            },
            {
                $match: {
                    user_id: mongoose.Types.ObjectId(user_id)
                }
            }
        ])

        if (!result) {
            return_data.error = true;
            return_data.message = 'no record found';
        }
        else {
            return_data.data = result;
        }
        return return_data;
    }

}
module.exports = dbusers;