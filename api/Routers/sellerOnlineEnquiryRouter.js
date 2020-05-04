const express = require('express')
const Router = express.Router();

//Controller Import
const sellerOnlineEnquiryController = require('../Controllers/sellerOnlineEnquiryController')

//Routers Defined
Router.get('/insertEnquiry', sellerOnlineEnquiryController.insertEnquiry)

//Export Router
exports.module = Router;