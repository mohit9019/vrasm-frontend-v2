var express = require("express");
const router = express.Router();
const dbbuyer = require("../model/dbbuyer");
const validations = require("../library/validations");
const Joi = require("joi");
const functions = require("../library/functions");
const dbusers = require("../model/dbusers");
const {transactions} = require("../library/db");

router.post('/get_users', getUsers);
router.post('/transactions', getTransaction);

async function getUsers(req, res) {
    let dbuserObj = new dbusers();
    let functionObj = new functions();
    let result = await dbuserObj.users();
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, result.message.toUpperCase(), result.data));

}

async function getTransaction(req, res) {
    let functionObj = new functions();
    let result = await transactions.find();
    if (result)
        res.send(functionObj.output(1, 'SUCCESS', result));
    else
        res.send(functionObj.output(0, 'SOMETHING BROKEN'.toUpperCase()));

}
module.exports = router;