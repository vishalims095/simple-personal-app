var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
const resturantSchema = mongoose.schema({
    name : {
        type : String,
        default : ''
    },

},{
    strict: true,
    collection: 'resturant',
    versionKey: false
})

exports.resturantModel = conn.model('resturant', resturantSchema)