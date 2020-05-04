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
}