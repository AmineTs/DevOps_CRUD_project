const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    // TODO check if user already exists
    client.exists(user.username, function(err, reply) {
      if (reply === 1) 
      {
        console.log('exists');
        return callback(new Error("User already exists"), null)
      } 
      else 
      {
        console.log('doesn\'t exist');
        client.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null)
          callback(null, res) // Return callback
        })
      }
    });
 
    
 
  },
  get: (username, callback) => {
     // TODO create this method
      client.hgetall(username, (err, res) => {
        if (err) return callback(err, null)
        callback(null, res) // Return callback
        console.log("firstname : "+res.firstname);
        
    })
   },

   update: (user,userId, callback) => {
    // Check parameters
    if(!userId)
    return callback(new Error("Wrong user parameters"), null)
    const userObj = {
      username : user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    }
    client.exists(userId, function(err, reply) {
      if (reply === 1) 
      {
        console.log('exists');
        client.hmset(userId, userObj, (err, res) => {
          if (err) return callback(err, null)
          if(userId===user.username)
          {
            callback(null, res) // Return callback
          }
        })
        if(userId!=user.username){
          client.rename(userId, user.username, (err, res) => {
            if (err) return callback(err, null)
            callback(null, res) // Return callback
          })
        }

      } 
      else 
      {
        console.log('doesn\'t exist');
        return callback(new Error("User don't exists and can't be updated"+ userId), null)
      }
    });

   }
}
