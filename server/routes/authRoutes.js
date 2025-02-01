// filepath: /C:/Projects/Job_Projects/tillforty/server/routes/authRoutes.js
const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Register new user
  router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};