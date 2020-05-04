const express = require('express')
const router = express.Router();

//Controller Import
const websiteEnquiryController = require('../Controllers/websiteEnquiryController')

//Routers Defined
router.get('/', websiteEnquiryController.showEnquiry)

//Routers Defined
router.post('/insertEnquiry', websiteEnquiryController.insertEnquiry)

//Export Router
module.exports = router;