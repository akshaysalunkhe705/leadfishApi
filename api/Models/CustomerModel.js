const mongoose =  require('mongoose');

const customerModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    passkey:{ Types:String, require: true},
    name:{ Types:String, require: true},
    company_name:{ Types:String, require: true},
    email:{ Types:String, require: true},
    contact_no1:{ Types:Number, require: true},
    contact_no2:{ Types:Number},
    password:{ Types:String, require: true},
    other_details:{ Types:Object },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('customer', customerModel)