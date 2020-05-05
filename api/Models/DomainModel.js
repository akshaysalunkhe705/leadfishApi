const mongoose = require('mongoose');

const domainModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company_id: mongoose.Schema.Types.ObjectId,
    domain_name: { type:String, require:true },
    form_leads: { type:String, require:true },
    chatbot_leads: { type:String, require:true },
    date_of_register: { type:String, require:true },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('domain', domainModel);