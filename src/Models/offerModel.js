var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  offerSchema  = mongoose.Schema(
    {
        restuarantId : {
            type : mongoose.Schema.ObjectId,
            ref : 'resturant'
        },
        offer_name : {
            type : String,
            require : true
        },
        offer_tenure : {
            type : String,
            require : true
        },
        offer_price : {
            type : String,
            require : true
        },
        offer_details : {
            type : String,
            require : true
        },
    },
    {
        strict: true,
        collection: 'offer',
        versionKey: false
    }
    
);
exports.offerModel = conn.model('offer', offerSchema);
