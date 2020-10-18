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
      respObj = {
        status: "success",
        msg: res
      }
      
      resp.status(200).json(respObj)
      console.log(resp.body);

  })

})


.put('/:username', function (req, resp) {
  user.update(req.body, req.params.username, (err, res) => {
    let respObjs
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: req.body
      }
      const username = req.params.username
      resp.status(200).json(respObj)
      console.log(resp.body);
  })
})

.delete('/:username', function (req, resp) {
  user.delete(req.params.username, (err, res) => {
    let respObjs
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: "user : "+req.params.username+" deleted"
      }
      const username = req.params.username
      resp.status(200).json(respObj)
      console.log("user : "+req.params.username+" deleted");
  })
})
module.exports = userRouter
