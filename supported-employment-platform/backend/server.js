const express = require('express');
const app = express();
const jobsRouter = require('./api/jobs');
const chatbotRouter = require('./api/chatbot');
const usersRouter = require('./api/users');

app.use(express.json());
app.use('/api/jobs', jobsRouter);
app.use('/api/chatbot', chatbotRouter);
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});