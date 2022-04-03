var admin = require ('../Controllers/adminController');
var auth = require ('../Modules/auth');
var multer = require ('multer');
var md5 = require ('md5');
var express = require  ('express')
var path = require ('path');

exports.getRouter = (app) => {

    let storage = multer.diskStorage({
        destination: function(req, file, callback) {
            console.log("multer")
            console.log(file)
            callback(null, './src/Upload/admin');
        },
        filename: function(req, file, callback) {
            let fileUniqueName = md5(Date.now());
            callback(null, fileUniqueName + path.extname(file.originalname));
        }
    });
    let upload = multer({ storage: storage });
    app.route("/admin/signup").post(admin.signup);
    app.route("/admin/login").post(admin.login);
    app.route("/admin/forgetPassword").post(admin.forgetPassword);
    app.route("/admin/resetPassword").post(admin.resetPassword);
    app.route("/admin/checkResetPassword").post(admin.checkResetPassword);

    
    app.route("/admin/createSubscription").post(admin.createSubscription);
    app.route("/admin/getSubscription").post(admin.getSubscription);
    app.route("/admin/removeSubscription").post(admin.removeSubscription);
    app.route("/admin/editSubscription").post(admin.editSubscription);
    
    app.route("/admin/getResturantList").post(admin.getResturantList);
    app.route("/admin/approveRestaurant").post(admin.approveRestaurant);
    app.route("/admin/deleteRestaurant").post(admin.deleteRestaurant);
    
    
}