var express = require("express");
const router = express.Router();
const validations = require("../library/validations");
const Joi = require("joi");
const functions = require("../library/functions");
const dbusers = require("../model/dbusers");


router.post('/register', registerSchema, register);
router.post('/otp',otpSchema, otp);
router.post('/my_orders', myOrders);


function registerSchema(req, res, next) {
    if (req.body.is_creator == undefined) {
        res.send(0, 'IS_CREATOR_FIELD_REQUIRED');
    }

    // schema for buyers
    let buyerSchema = Joi.object({
        name: Joi.string().min(2).max(20).pattern(/^[a-zA-Z ]+$/).required(),
        email: Joi.string().required(),
        gender: Joi.string().valid('male', 'female', 'other').required(),
        password: Joi.string().min(4).max(12).pattern(/^[0-9a-zA-Z@#$%^&-+=()]+$/).required(),
        is_creator: Joi.boolean().required()
    });

    // schema for creators
    let creatorSchema = Joi.object({
        name: Joi.string().min(2).max(20).pattern(/^[a-zA-Z ]+$/).required(),
        email: Joi.string().required(),
        gender: Joi.string().valid('male', 'female', 'other').required(),
        password: Joi.string().min(4).max(12).pattern(/^[0-9a-zA-Z@#$%^&-+=()]+$/).required(),
        is_creator: Joi.boolean().required(),
        course: Joi.string().required(),
        college: Joi.string().required()
    });

    let result;
    let validationObj = new validations();
    result = (req.body.is_creator == 'true') ?
        (validationObj.validateRequest(req, res, next, creatorSchema)) :
        (validationObj.validateRequest(req, res, next, buyerSchema))

    if (!result)
        return false;
}
/**
 * function to register
 */
async function register(req, res) {
    let dbuserObj = new dbusers();
    let functionObj = new functions();
    let result = await dbuserObj.register(req.body, req.body.is_creator);
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase()));
    else
        res.send(functionObj.output(0, result.message.toUpperCase()));
}

function otpSchema(req, res, next){
    let schema = Joi.object({
        email:Joi.string().required(),
        otp:Joi.number().integer().min(1000).max(9999).required(),
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function otp(req, res){
    let dbuserObj = new dbusers();
    let functionObj = new functions();
    let result = await dbuserObj.verifyOtp(req.body.email, req.body.otp);
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, result.message.toUpperCase()));
}

async function myOrders(req, res){
    let dbuserObj = new dbusers();
    let functionObj = new functions();
    let result = await dbuserObj.myOrders(req.body.user_id);
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, result.message.toUpperCase()));
}

module.exports = router;