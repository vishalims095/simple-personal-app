var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  categorySchema  = mongoose.Schema(
    {
        restuarantId : {
            type : mongoose.Schema.ObjectId,
            ref : 'resturant'
        },
        category_name : {
            type : String,
            require : true
        },
        parent_category : {
            type : String,
            require : true
        },
        category_slug : {
            type : String,
            require : true
        },
    },
    {
        strict: true,
        collection: 'category',
        versionKey: false
    }
    
);
exports.categoryModel = conn.model('category', categorySchema); 
