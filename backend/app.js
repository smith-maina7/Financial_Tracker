const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api', authRoutes) //

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
