const express = require('express')
const router = express.Router();

//Controller Import
const websiteEnquiryController = require('../Controllers/LeadController')

//Routers Defined
router.get('/', websiteEnquiryController.showEnquiry)

router.post('/createEnquiry', websiteEnquiryController.createEnquiry)

//Export Router
module.exports = router;