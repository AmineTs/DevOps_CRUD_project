const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
var cors = require('cors')
 


const app = express()
const port = process.env.PORT || 3000


const client = require('./dbClient')
client.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/',cors(), (req, res) => res.send('Hello World!'))


app.use('/user',cors(), userRouter)

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})


module.exports = server
