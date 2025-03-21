require('dotenv').config();
const { MongoClient } = require('mongodb');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first'); // Prioritize IPv4
dns.setServers(['8.8.8.8', '8.8.4.4']); // Use Google's DNS

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);const mongoose = require('mongoose');
require('dotenv').config();

let db;

async function connectDB() {
  try {
    await client.connect({
      serverSelectionTimeoutMS: 60000, // Increase timeout to 30 seconds
      socketTimeoutMS: 70000,
    });
    db = client.db('supported_employment');
    console.log('Connected to Azure Cosmos DB MongoDB API');
    console.log("✅ MongoDB Connected Successfully!");
    return db;
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
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