const express = require('express')
const router = express.Router();

//Controller Import
const DomainController = require('../Controllers/DomainController')

//Routers Defined
router.post('/create', DomainController.create)
router.get('/', DomainController.show)
router.get('/:id', DomainController.detailed)
router.get('/customerdomains/:company_id', DomainController.company_domains)

//Export Router
module.exports = router;