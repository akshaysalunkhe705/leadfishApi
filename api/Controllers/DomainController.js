const mongoose = require('mongoose');
const domainModel = require('../Models/DomainModel');

exports.create = (req, res, next) => {
    var datetime = new Date();
    const domain =  new domainModel({
        _id: mongoose.Types.ObjectId(),
        company_id: req.body.company_id,
        domain_name: req.body.domain_name,
        form_leads: req.body.form_leads,
        chatbot_leads: req.body.chatbot_leads,
        date_of_register: datetime.toISOString().slice(0,10)
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

exports.show = (req, res, next)=>{
    return domainModel.find().exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}

exports.detailed = (req, res, next) => {
    const id = req.params.id
    return domainModel.find({
        _id:id
    })
    .exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}

exports.company_domains = (req, res, next) => {
    const company_id = req.params.company_id
    return domainModel.find({
        company_id:company_id
    })
    .exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}