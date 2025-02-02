const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const os = require('os');
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

// Serve static files from the ../my-material-dashboard/dist directory
app.use(express.static(path.join(__dirname, '../my-material-ui-app/dist')));

// Routes
app.use('/api/auth', authRoutes(pool));

// Function to get the local network IP address
const getLocalNetworkIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the database');
  release();

  // Start the server
  app.listen(port, () => {
    const localNetworkIP = getLocalNetworkIP();
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Server running on http://${localNetworkIP}:${port}`);
  });
});