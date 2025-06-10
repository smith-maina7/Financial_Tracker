const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth')

const app = express()
const port = 3000

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
