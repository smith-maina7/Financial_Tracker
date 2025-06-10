const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token // getting token from cookie

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // you can access req.user in protected routes
    next()
  } catch (err) {
    console.error('JWT verification error:', err.message) // Log the error
    return res.status(403).json({ message: 'Invalid or expired token' })
  }
}

module.exports = authenticateToken
