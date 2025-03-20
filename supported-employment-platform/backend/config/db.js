const { MongoClient } = require('mongodb');

// Use direct connection string with port 10255
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('supported_employment');
    console.log('Connected to Azure Cosmos DB MongoDB API');
    return db;
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
}

// Initialize connection with better error handling
connectDB().then(() => {
  console.log('Database initialization complete');
  console.log("MongoDB URI:", process.env.MONGO_URI);

}).catch(err => {
  console.error('Fatal database connection error:', err);
  process.exit(1);
});

module.exports = {
  getDb: () => db,
  client
};