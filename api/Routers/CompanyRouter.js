const express = require('express')
const Router = express.Router();

//Controller Import
const CompanyController = require('../Controllers/CustomerController')

//Routers Defined
Router.get('/insertEnquiry', CompanyController.insertCustomer)

//Export Router
exports.module = Router;