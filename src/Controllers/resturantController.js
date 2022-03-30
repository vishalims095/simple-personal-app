const {resturantModel} = require('../Models/resturantModel')

exports.resturantSignup = async(req, res) =>{
    try{
        let {name, address, email, phone, subscriptionId} = req.body
        console.log(req.body)
        let checkResturant = await resturantModel.findOne({$or : [{email : email}, {phone : phone}, {name : name}]})
        if(checkResturant){
            throw new Error('Resturant already exist')
        }
        let data = req.body
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