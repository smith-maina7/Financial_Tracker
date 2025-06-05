const pool = require('../db')

// to find out if an email exist while registering.
const findUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  return res.rows[0]
}

const isUserRegistered = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  return res.rows.length > 0
}

const createUser = async ({ name, email, password }) => {
  const res = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
    [name, email, password],
  )
  return res.rows[0]
}

module.exports = {
  findUserByEmail,
  isUserRegistered,
  createUser,
}
