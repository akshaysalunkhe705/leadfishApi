const mongoose = require('mongoose')

const enquirySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    domain_name: { type: String },
    form_name: { type: String },
    form_id: { type: Number },
    enquiry: { type: Object },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('enquiries', enquirySchema);