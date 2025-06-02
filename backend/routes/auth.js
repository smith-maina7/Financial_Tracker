const express = require('express')
const bcrypt = require('bcrypt')
const pool = require('../db')

const router = express.Router()

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  try {
    // Check if email already exists
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already registered' })
    }

    // Hash the password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Insert user
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, hashedPassword],
    )

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0],
    })
  } catch (err) {
    console.error('Registration error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
