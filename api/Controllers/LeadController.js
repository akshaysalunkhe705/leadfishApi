const mongoose = require('mongoose');
const leadModel = require('../Models/LeadModel');

exports.create = (req, res, next) => {
    const lead = new leadModel({
        _id: mongoose.Types.ObjectId(),
        domain_name: req.body.domain_name,
        form_name: req.body.form_name,
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