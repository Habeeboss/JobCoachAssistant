const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// Get job matches for a user
router.get('/matches/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const userSkills = await db.query('SELECT skills FROM users WHERE id = ?', [userId]);
    const jobs = await db.query('SELECT * FROM jobs WHERE skills_required LIKE ?', [`%${userSkills[0].skills}%`]);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a new job
router.post('/post', async (req, res) => {
  const { title, description, skills_required } = req.body;
  try {
    await db.query('INSERT INTO jobs (title, description, skills_required) VALUES (?, ?, ?)', [title, description, skills_required]);
    res.json({ message: 'Job posted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;