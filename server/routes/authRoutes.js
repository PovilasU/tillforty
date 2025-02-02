const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Register new user
  router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password] // Storing plain text password (not recommended)
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Authenticate user
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const user = result.rows[0];

      // Compare the provided password with the stored password
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      res.status(200).json({ user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};