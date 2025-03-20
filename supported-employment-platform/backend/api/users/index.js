const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// Get user profile
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    res.json(user[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { skills, preferences, accessibilitySettings } = req.body;
  try {
    await db.query(
      'UPDATE users SET skills = ?, preferences = ?, accessibility_settings = ? WHERE id = ?',
      [skills, preferences, JSON.stringify(accessibilitySettings), userId]
    );
    res.json({ message: 'User profile updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;