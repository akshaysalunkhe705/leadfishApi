const express = require('express')
const router = express.Router();

//Controller Import
const DomainController = require('../Controllers/DomainController')

//Routers Defined
router.get('/insertEnquiry', DomainController.create)

//Export Router
module.exports = router;