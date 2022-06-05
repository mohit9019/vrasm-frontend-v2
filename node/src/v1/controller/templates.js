var express = require("express");
const router = express.Router();
const validations = require("../library/validations");
const Joi = require("Joi");
const functions = require("../library/functions");
const dbtemplates = require("../model/dbtemplates");
const { templates } = require('../library/db');
const fs = require("fs");
const { Types } = require("mongoose");
var formidable = require("formidable");
var path = require("path");
const { zip } = require("lodash");


router.post('/upload', uploadSchema, upload);
router.post('/get', getTemplateSchema, getTemplates);
router.post('/like', likeSchema, like);
router.post('/add_to_cart', addToCartSchema, addToCart);
router.post('/get_cart', getCartSchema, getCart);
router.post('/buy', buySchema, buy);
router.post('/feedback', feedbackSchema, feedback);

function uploadImageSchema(req, res, next) {
    let schema = Joi.object({
        template_id: Joi.string().required(),
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

router.post('/upload_image', async function (req, res) {
    let functionsObj = new functions();

    /* Upload images to Cloudinary, and push their paths into array. */
    let imagesPathArray = [];
    for(let i = 0; i < req.body?.images?.length; i++) {
        let result = await functionsObj.uploadFileToCloudinary(req.body.images[i], 'template_images');
        console.log(result);
        if (!result.error) {
            imagesPathArray.push(result.path);
        }
    }

    /* Upload zip file to Cloudinary. */
    let zipPath = '';
    let result = await functionsObj.uploadFileToCloudinary(req.body.zip, 'zip_files', 'raw');
    if(!result.error) {
        zipPath = result.path;
    }
    
    console.log('template_id', imagesPathArray);
    if(imagesPathArray.length == 0 ) { return false; }

    /* upadte image and zip paths in the database. */
    let id = Types.ObjectId(req.body.template_id);
    await templates.findByIdAndUpdate(id, { images: imagesPathArray, zip: zipPath});
    res.send(functionsObj.output(1, 'success'));
});

function uploadSchema(req, res, next) {
    let schema = Joi.object({
        name: Joi.string().required(),
        category: Joi.string().lowercase().required(),
        creator_id: Joi.string().lowercase().required(),
        description: Joi.string(),
        price: Joi.number().required(),
        technology:Joi.string().lowercase(),
        tags:Joi.string().lowercase()
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}
async function upload(req, res) {
    let dbtemplatesObj = new dbtemplates();
    let functionObj = new functions();
    let data = {
        name:req.body.name,
        category:req.body.category,
        creator_id: req.body.creator_id,
        description: req.body.description,
        price:req.body.price,
        technology: req.body.technology,
        tags: req.body.tags
    }
    let result = await dbtemplatesObj.upload(data, req.ip);
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, result.message.toUpperCase()));
}


function getTemplateSchema(req, res, next) {
    let schema = Joi.object({
        user_id: Joi.string().default(''),
        creator_id: Joi.string().default(''),
        category: Joi.string().lowercase().default(''),
        searchstring:Joi.string().lowercase().default(''),
        technology:Joi.string().lowercase().default('')
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function getTemplates(req, res) {
    let dbtemplateObj = new dbtemplates();
    let functionObj = new functions();
    let result = await dbtemplateObj.templates(req.body.user_id, req.body.template_id, req.body.creator_id, req.body.type, req.body.category, req.body.technology, req.body.searchstring);
    if (!result.error)
        res.send(functionObj.output(1, result.message.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, result.message.toUpperCase(), result.data));
}

function likeSchema(req, res, next) {
    let schema = Joi.object({
        user_id: Joi.string().required(),
        template_id: Joi.string().required(),
        action: Joi.string().valid('like', 'unlike').required()
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function like(req, res) {
    let templateObj = new dbtemplates();
    let functionObj = new functions();
    let result = templateObj.like(req.body.user_id, req.body.template_id, req.body.action);
    if (result)
        res.send(functionObj.output(1, 'success'.toUpperCase()));
    else
        res.send(functionObj.output(0, 'something_broken'.toUpperCase()));
}


function addToCartSchema(req, res, next) {
    let schema = Joi.object({
        user_id: Joi.string().required(),
        template_id: Joi.string().required(),
        action: Joi.string().valid('add', 'delete').required()
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function addToCart(req, res) {
    let templateObj = new dbtemplates();
    let functionObj = new functions();
    let result = templateObj.addToCart(req.body.user_id, req.body.template_id, req.body.action, req.ip);
    if (result)
        res.send(functionObj.output(1, 'success'.toUpperCase()));
    else
        res.send(functionObj.output(0, 'something_broken'.toUpperCase()));
}

function getCartSchema(req, res, next) {
    let schema = Joi.object({
        user_id: Joi.string().required(),
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function getCart(req, res) {
    let templateObj = new dbtemplates();
    let functionObj = new functions();
    let result = await templateObj.getCart(req.body.user_id);
    if (result)
        res.send(functionObj.output(1, 'success'.toUpperCase(), result));
    else
        res.send(functionObj.output(0, 'something_broken'.toUpperCase()));
}

function buySchema(req, res, next) {
    let schema = Joi.object({
        user_id: Joi.string().required(),
        template_id: Joi.string().required(),
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;
}

async function buy(req, res) {
    let templateObj = new dbtemplates();
    let functionObj = new functions();
    let result = await templateObj.buy(req.body.user_id, req.body.template_id, req.ip);
    if (!result.error)
        res.send(functionObj.output(1, 'success'.toUpperCase(), result.data));
    else
        res.send(functionObj.output(0, 'something_broken'.toUpperCase()));
}

function feedbackSchema(req, res, next) {
    let schema = Joi.object({
        template_id: Joi.string().required(),
        message: Joi.string().required(),
        rating: Joi.number().integer().min(0).max(5).required()
    })
    let validationObj = new validations();
    if (!validationObj.validateRequest(req, res, next, schema))
        return false;

}

async function feedback(req, res) {
    let templateObj = new dbtemplates();
    let functionObj = new functions();
    let result = await templateObj.feedback(req.body.user_id, req.body.template_id, req.body.rating, req.body.message, req.ip);
    res.send(functionObj.output(1, 'success'.toUpperCase()));
}

module.exports = router;
