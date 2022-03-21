var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  userSchema  = mongoose.Schema(
    {
        access_token : {
            type : String,
            require : true
        },   
        full_name : {
            type : String,
            require : true,
            default : "N/A"  
        },
        password : {
            type : String,
            require : true,
            default : "N/A"      
        },
        email : {
            type : String,
            require : true,
            default : "N/A"      
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

        // location : {
        //      type: {type: String, default: 'Point'},
        //     coordinates: [Number]
        // }
    },
    {
        strict: true,
        collection: 'User',
        versionKey: false
    }
    
);
// userSchema.index({location: '2dsphere'})
exports.UserModel = conn.model('User', userSchema); 
