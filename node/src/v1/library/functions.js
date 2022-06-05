const { users } = require("./db.js");
const { sign, verify } = require("jsonwebtoken");
var dateFormat = require("date-format");
var nodemailer = require("nodemailer");
var cloudinary = require("cloudinary");
const CONSTANTS = require('../library/constants.js');

class functions {
    constructor() { }

    /** function to get 4 digit otp.
     * @returns returns 4 digit random number.
     */
    getOtp() {
        let otp = Math.ceil(Math.random() * 10000);
        if (otp.toString().length == 4)
            return otp;
        this.getOtp();
    }

    /**
     * To upload files on Cloudinary.
     * @param file file data in base64 format.
     * @param folder folder name in cloudinary.
     * @returns path of the uploaded image.
     */
    async uploadFileToCloudinary(file, folder, resource_type = '') {

        let return_data = { error: true, path: '' };

        /* preparing Cloudinary config variable. */
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        /* if folder name is wrong, then return. */
        if (CONSTANTS.CLOUDINARY_FOLDERS.indexOf(folder) == -1) { return return_data; }

        let options = { folder };
        /* if resource type is raw, then assign random name and extension manually to public_id. */
        if (resource_type === 'raw') {
            let extension = this.getExtensionFromBase64(file);
            let public_id = this.createRandomPassword(20) + '.' + extension;
            options['resource_type'] = resource_type;
            options['public_id'] = public_id;
        }

        /* promise upload to cloudinary. */
        return cloudinary.v2.uploader.upload(file, options)
            .then(res => {
                return_data.error = false;
                return_data.path = res.secure_url;
                return return_data;
            })
            .catch(err => {
                console.log("error", err);
                return return_data;
            })
    }

    /**
     * to get extension from the base64 data.
     * @param {*} base64 
     */
    getExtensionFromBase64(base64) {
        return !base64 ? '' : base64.split(';')[0].split('/')[1];
    }

    /**
     * function to send otp to mobile number.
     * for production, change the recipents by the phoneno params.
     */
    sendOtp(phoneno, otp) {
        // var params = {
        //     'originator': 'TestMessage',
        //     'recipients': [
        //         '+917043120038'
        //     ],
        //     'body': `Your OTP for SignUp is ${otp}`
        // };
        // messagebird.messages.create(params, function (err, response) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log(response);
        // });
    }

    async sendEmail(to, subject, text) {
        // return false;
        console.log(process.env.OTP_MAIL);
        console.log(process.env.OTP_PASSWORD);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.OTP_MAIL, pass: process.env.OTP_PASSWORD }
        });
        let mailOptions = { from: process.env.OTP_MAIL, to, subject, text }

        return transporter.sendMail(mailOptions);
    }


    /**
    * Create random string for accesstoken etc with length
    * @param length length to create string for
    * @returns random string for given length
    */
    createRandomPassword(length) {
        return Math.random().toString(36).substring(2, (length / 2) + 2) + Math.random().toString(36).substring(2, (length / 2) + 2);
    }

    /**
     * function to verify otp and change the verify flag.
     */
    async verifyOtp(phoneno, otp) {
        let result = await users.findOneAndUpdate({ phoneno, otp }, { is_verified: true }, { new: true });
        if (result && result.is_verified)
            return true;
        else
            return false;
    }

    generateToken(user_id) {
        return sign({ user_id }, process.env.JWTKEY);
    }

    verifyToken(user_id, token) {
        let result = false;
        verify(token, process.env.JWTKEY, (err, decoded) => {
            if (err) return false;
            if (decoded.user_id == user_id)
                result = true;
        })
        return result;
    }

    /**
     * Send output to client with status code and message
     * @param status_code status code of a response
     * @param status_message status message of a response
     * @param data response data
     * @returns object with 3 parameters
     */
    output(status_code, status_message, data = null) {
        let output = {
            status_code: status_code.toString(),
            status_message: status_message.toUpperCase(),
            datetime: dateFormat('dd-MM-yyyy hh:mm:ss', new Date()),
            data: data
        };
        return output;
    }
}
module.exports = functions;