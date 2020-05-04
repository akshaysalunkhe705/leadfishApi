const mongoose = require('mongoose')

const leadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lead_type: { type: String }, // lead came from (FORM, CHATBOT, APP)
    domain_name: { type: String },
    form_name: { type: String },
    form_id: { type: Number },
    enquiry: { type: Object },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('lead', leadSchema);