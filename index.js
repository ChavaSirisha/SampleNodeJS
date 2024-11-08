const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is a sample node js application deploying to kubernetes!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})