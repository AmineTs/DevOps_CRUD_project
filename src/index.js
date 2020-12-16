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

app.get('/',cors(), (req, res) => res.sendFile("./front/Index.html",{root: __dirname }))

app.get('/SignUp.html',cors(), (req, res) => res.sendFile("./front/SignUp.html",{root: __dirname }))
app.get('/Home.html',cors(), (req, res) => res.sendFile("./front/Home.html",{root: __dirname }))
app.get('/Delete.html',cors(), (req, res) => res.sendFile("./front/Delete.html",{root: __dirname }))
app.get('/Update.html',cors(), (req, res) => res.sendFile("./front/Update.html",{root: __dirname }))



app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/front/" + "style.css");
});
app.get('/actions.js', function(req, res) {
  res.sendFile(__dirname + "/front/" + "actions.js");
});
app.use('/user',cors(), userRouter)

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})


module.exports = server
