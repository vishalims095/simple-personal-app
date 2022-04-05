var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  productSchema  = mongoose.Schema(
    {
        restuarantId : {
            type : mongoose.Schema.ObjectId,
            ref : 'resturant'
        },
        product_name : {
            type : String,
            require : true
        },
        product_code : {
            type : String,
            require : true
        },
        category_id : {
            type : String,
            require : true
        },
        product_quantity : {
            type : String,
            require : true
        },
        product_price : {
            type : Number,
            require : true
        },
        product_description : {
            type : String,
            require : true
        },
        product_image : {
            type : String,
            require : true
        },
    },
    {
        strict: true,
        collection: 'product',
        versionKey: false
    }
    
);
exports.productModel = conn.model('product', productSchema); 
