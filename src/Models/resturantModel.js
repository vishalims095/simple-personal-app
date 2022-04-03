var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
const resturantSchema = mongoose.Schema({
    name : {
        type : String,
        default : ''
    },
    address : {
        type : String,
        default : ''
    },
    email : {
        type : String,
        default : ''
    },
    phone : {
        type : String,
        default : ''
    },
    reg_no : {
        type : String,
        default : ''
    },
    subscriptionId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Subscription'
    },
    
    createdAt : {
        type : String,
        require : true,
        default : "N/A"          
    },
    isVerified : {
        type : Boolean,
        require : true,
        default : false          
    },
    isActive : {
        type : Boolean,
        require : true,
        default : true          
    },
    passwordResetMailSent : {
        type : Boolean,
        default : false
    },
    password : {
        type : String,
        default : ''
    },
    access_token : {
        type : String,
        default : ''
    },
    commercial_image : {
        type : String,
        default : ''
    },
    tax_certificate : {
        type : String,
        default : ''
    },
    tax_number : {
        type : String,
        default : ''
    },
    
    theme : {
        type : String,
        default : ''
    },
    national_id : {
        type : String,
        default : ''
    },
    national_id_img : {
        type : String,
        default : ''
    }
   
},{
    strict: true,
    collection: 'resturant',
    versionKey: false
})

exports.resturantModel = conn.model('resturant', resturantSchema)