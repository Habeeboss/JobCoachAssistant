require('dotenv').config();
const { AzureOpenAI } = require('openai');

const client = new AzureOpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY, // Changed environment variable name
  azureEndpoint: process.env.AZURE_OPENAI_ENDPOINT, // Correct property name
  apiVersion: '2023-12-01-preview' // Updated to valid API version
});

const getChatbotResponse = async (prompt) => {
  const response = await client.chat.completions.create({
    model: 'gpt-4', // Ensure this matches your Azure deployment name
    messages: [{ role: 'user', content: prompt }]
  });
  return response.choices[0].message.content;
};

module.exports = { getChatbotResponse };