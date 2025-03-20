const { AzureOpenAI } = require('openai');

const client = new AzureOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  endpoint: process.env.OPENAI_ENDPOINT,
  apiVersion: '2024-11-20'
});

const getChatbotResponse = async (prompt) => {
  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });
  return response.choices[0].message.content;
};

module.exports = { getChatbotResponse };