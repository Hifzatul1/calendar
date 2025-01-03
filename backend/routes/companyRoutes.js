const express = require('express');
const { addCompany, getCompanies, updateCompany, deleteCompany } = require('../controllers/companyController');
const router = express.Router();

router.post('/', addCompany);
router.get('/', getCompanies);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;