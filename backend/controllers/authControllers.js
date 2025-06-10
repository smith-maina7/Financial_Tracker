const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const exists = await userModel.isUserRegistered(email)
    if (exists) {
      return res.status(409).json({ error: 'Email already registered' })
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = await userModel.createUser({ name, email, password: hashedPassword })

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    })

    // Set JWT as HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    })

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    })
  } catch (err) {
    console.error('Registration error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModel.findUserByEmail(email)

    if (!user) {
      return res.status(401).json({ message: 'Email does not exist' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    )

    // Set JWT as HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    })

    res.status(200).json({
      message: 'Login successful',
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
