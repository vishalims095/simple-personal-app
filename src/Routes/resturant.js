var resturant = require ('../Controllers/resturantController');
var auth = require ('../Modules/auth');
var multer = require ('multer');
var md5 = require ('md5');
var express = require  ('express')
var path = require ('path');
const { Router } = require('express');

exports.getRouter = (app) => {

    let storage = multer.diskStorage({
        destination: function(req, file, callback) {
            console.log("multer")
            console.log(file)
            callback(null, './src/public/resturant');
        },
        filename: function(req, file, callback) {
            let fileUniqueName = md5(Date.now());
            callback(null, fileUniqueName + path.extname(file.originalname));
        }
    });
    let upload = multer({ storage: storage });

    app.route('/resturant/resturantSignup').post(upload.any(), resturant.resturantSignup)
}