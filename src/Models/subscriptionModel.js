var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  subscriptionSchema  = mongoose.Schema(
    {
        planName : {
            type : String,
            require : true
        },
        categoryAllowed : {
            type : Number,
            default : 0
        },
        timeLineType : {
            type : String,
            require : true,
            default : "N/A"  
        },
        totalTimeline : {
            type : Number,
            require : true,
            default : 0  
        },
        orderAllowed : {
            type : Number,
            require : true,
            default : 0      
        },
        planDetails : {
            type : String,
            require : true,
            default : "N/A"      
        },
        createdAt : {
            type : String,
            require : true,
            default : "N/A"          
        }

    },
    {
        strict: true,
        collection: 'Subscription',
        versionKey: false
    }
    
);
// SubscriptionSchema.index({location: '2dsphere'})
exports.subscriptionModel = conn.model('Subscription', subscriptionSchema); 
