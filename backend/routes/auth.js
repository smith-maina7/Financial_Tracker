const express = require('express')
const authController = require('../controllers/authControllers')
const authenticateToken = require('../middleware/authMiddleware')

const router = express.Router()

// Public routes (no token needed)
router.post('/register', authController.register)
router.post('/login', authController.login)

// Protect all routes below this line
router.use(authenticateToken)

// Protected routes (token required)
router.post('/add', authController.addExpense)
router.get('/', authController.getExpenses)

router.get('/check-auth', (req, res) => {
  res.json({ message: 'Authenticated', user: req.user })
})

module.exports = router
