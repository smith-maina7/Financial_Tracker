const express = require('express')
const authController = require('../controllers/authControllers')
const authenticateToken = require('../middleware/authMiddleware')

const router = express.Router()

// Public routes
router.post('/register', authController.register)
router.post('/login', authController.login)

// Middleware to protect all routes below this line
router.use(authenticateToken)

router.get('/check-auth', (req, res) => {
  res.json({ message: 'Authenticated', user: req.user })
})

// router.get('/dashboard', dashboardController.getDashboard)

module.exports = router
