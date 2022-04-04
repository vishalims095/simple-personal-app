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

    app.route('/resturant//resturantSignup').post(upload.any(), resturant.resturantSignup)
    app.route("/resturant/login").post(resturant.login);

    app.route("/resturant/forgetPassword").post(resturant.forgetPassword);
    app.route("/resturant/resetPassword").post(resturant.resetPassword);
    app.route("/resturant/checkResetPassword").post(resturant.checkResetPassword);
    app.route("/resturant/getSubscription").post(resturant.getSubscription);

    app.route("/resturant/addCategory").post(resturant.addCategory);
    app.route("/resturant/categoryList").post(resturant.categoryList);
    app.route("/resturant/removeCategory").post(resturant.removeCategory);
    app.route("/resturant/updateCategory").post(resturant.updateCategory);

    
    app.route("/resturant/addProduct").post(upload.any(), resturant.addProduct);
    app.route("/resturant/getProduct").post( resturant.getProduct);

}