const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const pool = require('./db/dbConfig');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5003;

// Middleware
app.use(cors({
  origin: true, // Allow all origins
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(bodyParser.json());

// Serve static files from the /dist directory
app.use(express.static(path.join(__dirname, 'dist')));

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