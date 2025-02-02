const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db/dbConfig');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5003;

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
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});