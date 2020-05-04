const express = require('express')
const router = express.Router();

//Controller Import
const DomainController = require('../Controllers/DomainController')

//Routers Defined
router.post('/create', DomainController.create)
router.get('/', DomainController.show)

//Export Router
module.exports = router;