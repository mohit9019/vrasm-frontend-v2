var express = require('express');
const Joi = require('joi');
const functions = require('../library/functions');
const dbusers = require('../model/dbusers');
const jwt = require("jsonwebtoken");
const validations = require("../library/validations");

const router = express.Router();
router.post('/login', loginSchema, login);
// router.post('/otp', otpSchema, otp);
router.get('/forget_password', forgetPasswordSchema, forgetPassword);
router.post('/get_profile', getProfileSchema, getProfile);
router.post('/set_profile', setProfileSchema, setProfile);
router.post('/change_password', changePasswordSchema, changePassword);
/**
 * validation function.
 */
function loginSchema(req, res, next) {
    let schema = Joi.object({
        email:Joi.string().required(),
        password:Joi.string().required(),
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function login(req, res) {
        let dbusersObj = new dbusers();
        let functionsObj = new functions();
        let result = await dbusersObj.login(req.body.email, req.body.password);
        if(result.error)
            res.send(functionsObj.output(0,'Invalid email or password'))
        else
            res.send(functionsObj.output(1,'success',result.data));
}


/**
 * validation function.
 */
function getProfileSchema(req, res, next) {
    let schema = Joi.object({
        user_id:Joi.string().required()
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function getProfile(req, res) {
        let dbusersObj = new dbusers();
        let functionsObj = new functions();
        let result = await dbusersObj.getProfile(req.body.user_id);
        if(result.error)
            res.send(functionsObj.output(0,'something broken'))
        else
            res.send(functionsObj.output(1,'success',result.data));
}



/**
 * validation function.
 */
 function setProfileSchema(req, res, next) {
    let schema = Joi.object({
        user_id:Joi.string().required(),
        accesstoken:Joi.string().required(),
        name:Joi.string(),
        address:Joi.string(),
        city: Joi.string(),
        pincode: Joi.number().integer().min(100000).max(999999)
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function setProfile(req, res) {
        let dbusersObj = new dbusers();
        let functionsObj = new functions();
        let result = await dbusersObj.setProfile(req.body.user_id, req.body.name, req.body.city, req.body.address, req.body.pincode);
        if(result.error)
            res.send(functionsObj.output(0,'something broken'))
        else
            res.send(functionsObj.output(1,'success',result.data));
}

function changePasswordSchema(req, res, next) {
    let schema = Joi.object({
        user_id:Joi.string().required(),
        accesstoken:Joi.string().required(),
        old_password: Joi.string().required(),
        new_password: Joi.string().required()
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function changePassword(req, res) {
        let dbusersObj = new dbusers();
        let functionsObj = new functions();
        let result = await dbusersObj.changePassword(req.body.user_id, req.body.old_password, req.body.new_password);
        if(result.error)
            res.send(functionsObj.output(0,result.message))
        else
            res.send(functionsObj.output(1,'success'));
}
/**
 * validation function.
 */
function forgetPasswordSchema(req, res, next) {
    next();
}
function forgetPassword(req, res) {
    res.send('forget password');
}



/**
 * validation function.
 */
function otpSchema(req, res, next) {
    let schema = Joi.object({
        otp: Joi.number().integer().min(1000).max(9999).required(),
    })
    next();
}
function otp(req, res) {
    let functionsObj = new functions();
    let result = functionsObj.sendOtp();
    // functionsObj.verifyOtp(req.body.phoneno, req.body.otp); 
    res.send('otp');
}
module.exports = router;