const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

express()
  .get('/', (req, res) => res.send('Hello, World!'))
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}`))