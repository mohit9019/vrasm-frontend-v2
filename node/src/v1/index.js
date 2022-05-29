var express = require("express");
const router = express.Router();
const Joi = require('joi');
const functions = require('./library/functions');
const validations = require("./library/validations");
// var login = require('./controller/login.js');
let open_access_apis = [
    '/template/get', '/user/login', '/user/forget_password', '/admin/get_users', '/admin/transactions', '/buyer/register', '/buyer/otp'
];
function validateSchema(req, res, next){
    if(open_access_apis.indexOf(req.url) > -1){
        next();
        return true;
    }
    let schema = Joi.object({
        user_id:Joi.string().required(),
        accesstoken:Joi.string().required()
    })
    let validationObj = new validations();
    if(!validationObj.validateRequest(req, res, next, schema))
        return false;
}
async function checkAccess(req, res, next) {
    if(open_access_apis.indexOf(req.url) > -1){
        next();
        return true;
    }
    let functionsObj = new functions();
    if(functionsObj.verifyToken(req.body.user_id, req.body.accesstoken)){
        next();
        return true;
    }
    else{
        res.send(functionsObj.output(404,'ACCESS_DENIED_PLEASE_RELOGIN'));
        return false;
    }
}
router.use(validateSchema);
router.use(checkAccess);
router.use('/user', require('./controller/login.js'));
router.use('/buyer', require('./controller/buyer.js'));
router.use('/admin', require("./controller/admin.js"));
router.use('/template', require("./controller/templates"));

module.exports = router;