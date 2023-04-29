const dotenv =require("dotenv")
dotenv.config();
const express = require('express')
const app = express()
const port = process.env.MONGODB_URL || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const start = async () => {
  try {
    app.listen(port, () => {
        console.log(`noteZipper is listening on port ${port}`)
      })
  } catch (error) {
    console.error();
  }
};
start();
