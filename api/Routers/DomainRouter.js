const express = require('express')
const Router = express.Router();

//Controller Import
const DomainController = require('../Controllers/DomainController')

//Routers Defined
Router.get('/insertEnquiry', DomainController.insertEnquiry)

//Export Router
exports.module = Router;