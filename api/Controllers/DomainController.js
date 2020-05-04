const mongoose = require('mongoose');
const domainModel = require('../Models/DomainModel');

exports.create = (req, res, next) => {
    const domain =  new domainModel({
        _id = mongoose.Types.ObjectId(),
        company_id: req.body.company_id,
        domain_name: req.body.domain_name,
        form_leads: req.body.form_leads,
        chatbot_leads: req.body.chatbot_leads,
        date_of_register: req.body.date_of_register,
        timestamp: { type: Date, default: Date.now }
    })
    domain.save()
    .then(result => {
        return res.status(201).json({
            error:false,
            result:result
        })
    })
    .catch(err => {
        return res.status(500).json({
            error:true,
            result:err
        })
    })
}
