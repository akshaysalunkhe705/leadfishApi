const mongoose = require('mongoose');
const leadModel = require('../Models/LeadModel');

exports.create = (req, res, next) => {
    const lead = new leadModel({
        _id: mongoose.Types.ObjectId(),
        domain_id: req.body.domain_id,
        customer_id: req.body.customer_id,
        enquiry: req.body
    })
    lead.save()
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
};

exports.show = (req, res, next) => {
    return leadModel.find().exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}