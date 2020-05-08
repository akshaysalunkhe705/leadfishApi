const express = require('express')
const router = express.Router();

//Controller Import
const CustomerController = require('../Controllers/CustomerController')

//Routers Defined
router.post('/create', CustomerController.create)
router.get('/', CustomerController.show)
router.get('/:id', CustomerController.detailed)

//Export Router
module.exports = router;