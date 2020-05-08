const mongoose = require('mongoose')
const customerModel = require('../Models/CustomerModel')

exports.create = (req, res, next) => {
    const customer = customerModel({
        _id: mongoose.Types.ObjectId(),
        passkey: req.body.passkey,
        name: req.body.name,
        company_name: req.body.company_name,
        email: req.body.email,
        contact_no1: req.body.contact_no1,
        contact_no2: req.body.contact_no2,
        password: req.body.password,
        other_details: req.body.other_details,
    })
    customer.save()
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
    return customerModel.find().exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}

exports.detailed = (req, res, next)=>{
    const id = req.params.id
    return customerModel.find({
        _id:id
    }).exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}