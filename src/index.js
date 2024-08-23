const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.json({message: "Hello World 👋", author: "Code Persist"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
