const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory user store (replace with DB in production)
const users = [];

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required.' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ success: false, message: 'User already exists.' });
  }
  users.push({ email, password });
  res.json({ success: true, message: 'User registered!' });
});

// Simple login endpoint for testing
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, role: 'employee', data: user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
