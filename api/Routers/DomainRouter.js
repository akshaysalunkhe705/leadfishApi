const express = require('express')
const Router = express.Router();

//Controller Import
const portalEnquiryController = require('../Controllers/portalEnquiryController')

//Routers Defined
Router.get('/insertEnquiry', portalEnquiryController.insertEnquiry)

//Export Router
exports.module = Router;