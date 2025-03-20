const { AzureOpenAI } = require('openai');

const client = new AzureOpenAI({
  apiKey: 'your-azure-openai-key',
  endpoint: 'https://your-endpoint.openai.azure.com',
  apiVersion: '2023-05-15'
});

const getChatbotResponse = async (prompt) => {
  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });
  return response.choices[0].message.content;
};

module.exports = { getChatbotResponse };