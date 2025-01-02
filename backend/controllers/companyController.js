const Company = require('../models/Company');

// Add a new company
exports.addCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all companies
exports.getCompanies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const companies = await Company.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Company.countDocuments();
    res.status(200).json({
      companies,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a company
exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
