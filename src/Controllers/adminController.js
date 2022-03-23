const { UserModel } = require('../Models/userModel')
var commFunc = require('../Modules/commonFunction');
var bcrypt = require('bcryptjs');
const e = require('express');
var salt = bcrypt.genSaltSync(10);


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
            commFunc.sendmail(link, "vishallsharma07@gmail.com")
        
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
exports.sendMail = async(req, res) =>{
    try{
        commFunc.sendmail("hi vishal", "vishallsharma07@gmail.com")
        res.status(200).json({message : "mail sent"})
    }catch(error){
        console.log(error)
    }
}