const express = require('express');
const router = express.Router();
const openai = require('../../config/openai');

// Chatbot endpoint
router.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.getChatbotResponse(message);
    res.json({ reply: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;