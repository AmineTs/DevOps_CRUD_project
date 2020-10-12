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
   }
}
