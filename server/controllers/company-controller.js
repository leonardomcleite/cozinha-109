// Import database
const knex = require('../db')

// Retrieve all company
exports.companyFind = async (req, res) => {
  // Get all company from database
  knex
    .select('*') // select all records
    .from('company') // from 'company' table
    .then(data => {
      // Send company extracted from database in response
      res.json(data && data[0])
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving company: ${err}` })
    })
}

// Create new company
exports.companyCreate = async (req, res) => {
  // Add new company to database
  knex('company')
    .insert({ // insert new record, a company
      'phone': req.body.phone,
      'name': req.body.name,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Success to created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating: ${err}` })
    })
}

// Create new company
exports.companyUpdate = async (req, res) => {
  // Add new company to database
  knex('company')
    .update({ // insert new record, a company
      'id': req.body.id,
      'phone': req.body.phone,
      'name': req.body.name,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Success to update.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error updating: ${err}` })
    })
}
