const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer');

// Approve Freelancer
router.post('/approve-freelancer/:id', async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    freelancer.verificationStatus = 'Approved';
    await freelancer.save();
    res.status(200).send('Freelancer approved');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Reject Freelancer
router.post('/reject-freelancer/:id', async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    freelancer.verificationStatus = 'Rejected';
    await freelancer.save();
    res.status(200).send('Freelancer rejected');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;