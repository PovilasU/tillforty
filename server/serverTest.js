const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db/dbConfig');
const authRoutes = require('./routes/authRoutes');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes(pool));

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the database');
  release();

  // Start the server
  app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);

    // Make a POST request to create a user
    try {
      const response = await axios.post(`http://localhost:${port}/api/auth/register`, {
        name: 'Initial User',
        email: 'initial@example.com',
        password: 'initialpassword'
      });
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
  });
});