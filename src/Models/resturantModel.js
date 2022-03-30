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
    subscriptionId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Subscription'
    },
    image : {
        type : String,
        default : ''
    }
},{
    strict: true,
    collection: 'resturant',
    versionKey: false
})

exports.resturantModel = conn.model('resturant', resturantSchema)