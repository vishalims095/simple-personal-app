const {resturantModel} = require('../Models/resturantModel')
var commFunc = require('../Modules/commonFunction');
var bcrypt = require('bcryptjs');

exports.resturantSignup = async(req, res) =>{
    try{
        let {name, address, email, phone, subscriptionId, password} = req.body
        console.log(req.body)
        
        data['password'] = encryptedPassword
        data['access_token'] =  commFunc.createJWT(new Date())
        let checkResturant = await resturantModel.findOne({$or : [{email : email}, {phone : phone}, {name : name}]})
        if(checkResturant){
            throw new Error('Resturant already exist')
        }
        let data = req.body
        data['createdAt'] = Math.round(new Date().getTime()/1000)
        req.files.forEach((file) =>{
            console.log(file.filename)
            data['image'] = file.filename
        })
        let saveData = new resturantModel(data)
        let createResturant = await saveData.save()
        if(!createResturant){
            throw new Error('Unable to create resturanct')
        }else{
            res.status(200).json({message : "resturant created", data : createResturant})
        }
    }catch(err){
        res.status(403).json({message : err.message})
    }
}

exports.login = async(req, res) =>{
    try{
        let {email, password} = req.body
        let loginData = await resturantModel.findOne({email : email})
        if(!loginData) {
            throw new Error('Invalid credential')
        }else{
            let verifyPassword = await bcrypt.compare(req.body.password, loginData.password);
            console.log(verifyPassword)
            if(verifyPassword == false) {
                throw new Error('Invalid credential')
            }else{
                let access_token =  commFunc.createJWT(new Date())
                let updateToken = resturantModel.findOneAndUpdate({_id : loginData._id}, {access_token : access_token}, {new : true})
                if(!updateToken){
                    throw new Error('Unable to update token')
                }
                res.status(200).json({message : "Login successful", data : updateToken})
            }
        }
    }catch(error){
        res.status(403).json({"message" : error.message})
    }
}



exports.forgetPassword = async(req, res) =>{
    try{
        let {email} = req.body
        let checkEmail = await resturantModel.findOne({email : email})
        console.log(checkEmail)
        if(!checkEmail) {
            throw new Error('Invalid email')
        } else{
            let link = `http://52.201.126.178:3000/resturant-web/auth/reset-password?${checkEmail.access_token}`
            commFunc.sendmail(link, email)
        
            let updateStatus = await resturantModel.findOneAndUpdate({email : email}, {passwordResetMailSent : true}, {new : true})
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
        let checkToken = await resturantModel.findOne({access_token : access_token})
        if(!checkToken) {
            throw new Error('Invalid Token')
        } else{
            let encryptedPassword = await bcrypt.hash(req.body.password, 10)
            console.log("==========>",encryptedPassword)
            let updatePassword = await resturantModel.findOneAndUpdate({access_token : access_token}, {passwordResetMailSent : false, password : encryptedPassword}, {new : true})
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
        let checkToken = await resturantModel.findOne({access_token})
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