const express = require('express');
const {
  addCommunicationMethod,
  getCommunicationMethods,
  updateCommunicationMethod,
  deleteCommunicationMethod,
} = require('../controllers/communicationController');

const router = express.Router();

// Add a new communication method
router.post('/', addCommunicationMethod);

// Get all communication methods
router.get('/', getCommunicationMethods);

// Update a communication method
router.put('/:id', updateCommunicationMethod);

// Delete a communication method
router.delete('/:id', deleteCommunicationMethod);

module.exports = router;
