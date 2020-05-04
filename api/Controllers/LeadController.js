const mongoose = require('mongoose');
const enquiryModel = require('../Models/enquiryModel');

exports.createEnquiry = (req, res, next) => {
    const enquiry = new enquiryModel({
        _id: mongoose.Types.ObjectId(),
        domain_name: req.body.domain_name,
        form_name: req.body.form_name,
        enquiry: req.body
    })
    enquiry.save()
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        });
};

exports.showEnquiry = (req, res, next) => {
    return enquiryModel.find().exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}