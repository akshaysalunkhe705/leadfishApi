const mongoose = require('mongoose');

const domainModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company_id: mongoose.Schema.Types.ObjectId,
    domain_name: { Types:String, require:true },
    form_leads: { Types:Boolean, require:true },
    chatbot_leads: { Types:Boolean, require:true },
    date_of_register: { Types:Boolean, require:true },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.Schema('domain', domainModel);