var cors = require("cors");
var dotenv = require("dotenv");
var express = require("express");
var fileUpload = require("express-fileupload");
var path = require("path");
/*
 *  Create express server instance.
 */
var app = express();

/*
 * Express configuration
 */
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use(cors());
app.use(fileUpload({
    createParentPath: true,
}));
/**
 * env variables Configuration for backend, when you want to include frontend then change
 * path ./ to ../
 */
var result = dotenv.config({ path: path.join(__dirname,'../','.env')});
if (result.error)
    throw result.error;
/**
 * Express Server
 */
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});
/*
 * Primary app routes.
 */
app.use('/v1', require('./v1'));

// const dbbuyer = require('./v1/model/dbbuyer.js');
// let buyerObj = new dbbuyer();
// buyerObj.register('Manav','1112523233','male',new Date());
module.exports = server;
