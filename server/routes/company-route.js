// Import express
const express = require('express')

// Import company-controller
const companyRoutes = require('../controllers/company-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all company
// In server.js, company route is specified as '/company'
// this means that '/all' translates to '/company/all'
router.get('/', companyRoutes.companyFind)

// Add route for POST request to create new company
// In server.js, company route is specified as '/company'
// this means that '/create' translates to '/company/create'
router.post('/', companyRoutes.companyCreate)

// Add route for PUT request to create new company
// In server.js, company route is specified as '/company'
// this means that '/create' translates to '/company/create'
router.put('/', companyRoutes.companyUpdate)

// Export router
module.exports = router