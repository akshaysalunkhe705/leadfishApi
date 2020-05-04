const express = require('express')
const Router = express.Router();

//Controller Import
const CustomerController = require('../Controllers/CustomerController')

//Routers Defined
Router.get('/createEnquiry', CustomerController.createEnquiry)

//Export Router
exports.module = Router;