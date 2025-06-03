const express = require('express')
const authController = require('../controllers/authControllers')

const router = express.Router() // you could also destructure from express "const = { Router } = require('express') then use const router = Router()"

// Register route
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
