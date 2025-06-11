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

// Add a new expense
const addExpense = async ({ userId, amount, category, subcategory, date, description }) => {
  const res = await pool.query(
    `INSERT INTO expenses (user_id, amount, category, subcategory, date, description)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [userId, amount, category, subcategory, date, description],
  )
  return res.rows[0]
}

// Get all expenses for a user
const getUserExpenses = async (userId) => {
  const res = await pool.query(`SELECT * FROM expenses WHERE user_id = $1 ORDER BY date DESC`, [
    userId,
  ])
  return res.rows
}

module.exports = {
  findUserByEmail,
  isUserRegistered,
  createUser,
  addExpense,
  getUserExpenses,
}
