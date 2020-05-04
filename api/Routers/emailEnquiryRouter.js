const express = require('express')
const Router = express.Router();

//Controller Import
const emailEnquiryController = require('../Controllers/emailEnquiryController')

//Routers Defined
Router.get('/insertEnquiry', emailEnquiryController.insertEnquiry)

//Export Router
exports.module = Router;