const express = require('express')
const router = express.Router();

//Controller Import
const LeadController = require('../Controllers/LeadController')

//Routers Defined
router.post('/createEnquiry', LeadController.create)
router.get('/', LeadController.show)

//Export Router
module.exports = router;