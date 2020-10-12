const express = require('express')
const user = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    user.create(req.body, (err, res) => {
      let respObj
      if(err) {
        console.log(req.body);
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(201).json(respObj)
      console.log(req.body);
    })
  })

 

.get('/:username', function (req, resp) {
  user.get(req.params.username, (err, res) => {
    let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      const username = req.params.username
      resp.status(200).json(username)
  })

})
module.exports = userRouter
