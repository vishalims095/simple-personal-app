const { UserModel } = require('../Models/userModel')
var commFunc = require('../Modules/commonFunction');
var bcrypt = require('bcryptjs');
const e = require('express');
var salt = bcrypt.genSaltSync(10);
const {subscriptionModel} = require('../Models/subscriptionModel')
const {resturantModel} = require('../Models/resturantModel')

exports.signup = async(req, res) => {
    try{
        let {email, password, name} = req.body
        let encryptedPassword = await bcrypt.hash(req.body.password, 10)
        console.log("==========>",encryptedPassword)
        let data = req.body
        data['password'] = encryptedPassword
        data['access_token'] =  commFunc.createJWT('test')
        let saveData =  new UserModel(data)
        let creatUser = await saveData.save()
        if(!creatUser){
            throw new Error("Unable to create user")
        } else{
            res.status(200).json({message : "User created", data : creatUser})
        }
    }catch(error){
        res.status(403).json({"message" : error.message})
    }
}

exports.login = async(req, res) =>{
    try{
        let {email, password} = req.body
        let loginData = await UserModel.findOne({email : email})
        if(!loginData) {
            throw new Error('Invalid credential')
        }else{
            let verifyPassword = await bcrypt.compare(req.body.password, loginData.password);
            console.log(verifyPassword)
            if(verifyPassword == false) {
                throw new Error('Invalid credential')
            }else{
                res.status(200).json({message : "Login successful"})
            }
        }
    }catch(error){
        res.status(403).json({"message" : error.message})
    }
}

exports.forgetPassword = async(req, res) =>{
    try{
        let {email} = req.body
        let checkEmail = await UserModel.findOne({email : email})
        console.log(checkEmail)
        if(!checkEmail) {
            throw new Error('Invalid email')
        } else{
            let link = `http://52.201.126.178:3000/admin/auth/reset-password?${checkEmail.access_token}`
            commFunc.sendmail(link, email)
        
            let updateStatus = await UserModel.findOneAndUpdate({email : email}, {passwordResetMailSent : true}, {new : true})
            res.status(200).json({messge : "Link sent", token : checkEmail.access_token})
        }
    }catch(error){
        res.status(403).json({"message" : error.message})
    }
}

exports.resetPassword = async(req, res) =>{
    try{
        let {access_token, password} = req.body
        console.log("reset password", req.body)
        let checkToken = await UserModel.findOne({access_token : access_token})
        if(!checkToken) {
            throw new Error('Invalid Token')
        } else{
            // if(checkToken.passwordResetMailSent == false){
            //     throw new Error('Already password updated')
            // }
            let encryptedPassword = await bcrypt.hash(req.body.password, 10)
            console.log("==========>",encryptedPassword)
            let updatePassword = await UserModel.findOneAndUpdate({access_token : access_token}, {passwordResetMailSent : false, password : encryptedPassword}, {new : true})
            if(!updatePassword){
                throw new Error('Unable to update password')
            }
            res.status(200).json({message : "Password updated"})
        }
    }catch(error){
        res.status(403).json({"message" : error.message})
    }
}
exports.checkResetPassword = async(req, res) =>{
    try{
        let {access_token} = req.body
        let checkToken = await UserModel.findOne({access_token})
        if(!checkToken){
            throw new Error('Invalid token')
        }else{
            if(checkToken.passwordResetMailSent == false){
                throw new Error('Password already set')
            }else{
                res.status(200).json({message : "You can set password", status : 200})
            }
        }
    }catch(error){
        res.status(403).json({message : error.message})
    }
}

exports.createSubscription = async(req, res) =>{
    try {
        console.log("create subscription", req.body)
        let {price , planName, categoryAllowed, timeLineType, totalTimeline, orderAllowed, planDetails} = req.body
        let checkSubscription = await subscriptionModel.findOne({planName : {$regex : planName, $options : 'i'}})
        if(checkSubscription){
            throw new Error('Subcription name already exist')
        }
        let data = req.body
        data['createdAt'] = Math.round(new Date().getTime()/1000)

        let saveSubscription = new subscriptionModel(data)
        let createSubscription = await saveSubscription.save()
        res.status(200).json({message : "Subscription created", data : createSubscription})
    }catch(error){
        res.status(403).json({message : error.message})
    }
}

exports.getSubscription = async(req, res) =>{
    try{
        let {id} = req.body
        if(id){
            let data = await subscriptionModel.findOne({_id : id})
            res.status(200).json({message : "Data", data : data})
        }else{
            let data = await subscriptionModel.find({}).sort({_id : -1})
            res.status(200).json({message : "Data", data : data})
        }
        
    }catch(error){
        res.status(403).json({message : error.message})
    }
}


exports.removeSubscription = async(req, res) =>{
    try{
        let {subscriptionId} = req.body
        let data = await subscriptionModel.remove({_id : subscriptionId})
        res.status(200).json({message : "Removed successfully"})
    }catch(error){
        res.status(403).json({message : error.message})
    }
}

exports.editSubscription = async(req, res) =>{
    try {
        let {id, planName,price, categoryAllowed, timeLineType, totalTimeline, orderAllowed, planDetails} = req.body
        console.log("edit", req.body)
        let getMyData = await subscriptionModel.findOne({_id : id})
        if(!getMyData){
            throw new Error('No data')
        }
        if(planName != getMyData.planName){
            let checkSubscription = await subscriptionModel.findOne({planName : {$regex : planName, $options : 'i'}})
            if(checkSubscription){
                throw new Error('Subcription name already exist')
            }
        }
        let data = req.body
        let updateData = await subscriptionModel.findOneAndUpdate({_id : id}, data, {new : true})
        if(!updateData){
            throw new Error('Unable to update')
        } res.status(200).json({data : updateData, "message" : "Data updated"})
    }catch(error){
        res.status(403).json({message : error.message})
    }
}
exports.getResturantList = async(req, res) =>{
    try{
        let {sort_type} = req.body
        console.log(req.body)
        let data = []
        if(sort_type == 'aesc'){
            data = await resturantModel.find({}).sort({name : 1})    
        }else if(sort_type == 'desc'){
            data = await resturantModel.find({}).sort({name : -1})
        }else{
            data = await resturantModel.find({}).sort({_id : -1})
        }
        res.status(200).json({message : "Resturant list", data : data})
    }catch(error){
        res.status(403).json({message : error.message})
    }
}

exports.approveRestaurant = async(req, res) =>{
    try{
        let {restaurant_id, status} = req.body
        console.log("approve ========", req.body)
        let data = await resturantModel.findOneAndUpdate({_id : restaurant_id}, {isVerified : status}, {new : true})
        if(!data){
            throw new Error('Unable to update')
        }
        res.status(200).json({message : "Resturant list", data : data})
    }catch(error){
        res.status(403).json({message : error.message})
    }
}

exports.deleteRestaurant = async(req, res) =>{
    try{
        let {restaurant_id} = req.body
        let deleteRestaurant = await resturantModel.remove({_id : restaurant_id})
        res.status(200).json({message : "Restaurant removed"})
    }catch(err){
        res.status(403).json({message : err.message})
    }
}
