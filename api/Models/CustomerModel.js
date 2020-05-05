const mongoose = require('mongoose');

const customerModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pass_key:{ type:String },
    name:{ type:String, required:true },
    company_name:{ type:String, require:true},
    email:{ type:String, require:true},
    contact_no1:{ type:Number, require:true},
    contact_no2:{ type:Number},
    password:{ type:String, require:true},
    other_details:{ type:String },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('customer', customerModel)