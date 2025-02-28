// filepath: /d:/MINDLANCER-007/backend/routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Search jobs
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const jobs = await Job.find({ title: { $regex: query, $options: 'i' } });
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;