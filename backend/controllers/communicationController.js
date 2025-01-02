const CommunicationMethod = require('../models/CommunicationMethod');

// Add a new communication method
exports.addCommunicationMethod = async (req, res) => {
  try {
    const communicationMethod = new CommunicationMethod(req.body);
    await communicationMethod.save();
    res.status(201).json(communicationMethod);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all communication methods
exports.getCommunicationMethods = async (req, res) => {
  try {
    const communicationMethods = await CommunicationMethod.find().sort({ sequence: 1 });
    res.status(200).json(communicationMethods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a communication method
exports.updateCommunicationMethod = async (req, res) => {
  try {
    const updatedMethod = await CommunicationMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedMethod);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a communication method
exports.deleteCommunicationMethod = async (req, res) => {
  try {
    await CommunicationMethod.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
