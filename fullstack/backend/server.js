const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load Data
const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8'));
const reviews = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'reviews.json'), 'utf8'));

// API Endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// Contact Endpoint (Placeholder)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received by futuristic relay system.' });
});

app.listen(PORT, () => {
  console.log(`Daniel Gadgets Backend operational on port ${PORT}`);
});
