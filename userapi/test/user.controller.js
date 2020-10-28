const { expect } = require('chai')
const users = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'd',
        firstname: 'Sergei',
        lastname: 'Kudinov',
        password:'blabla'
      }
      users.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done)=> {
     // TODO create this test
     // Warning: the user already exists
     const user = {
      username: 'c',
      firstname: 'Sergei',
      lastname: 'Kudinov',
      password:'blabla'
    }
    users.create(user, (err, result) => {
      expect(err).to.not.be.equal("User already exists")
      expect(result).to.be.equal('OK')
      done()
    })
  })
})
   describe('Get', ()=> {
     // TODO Create test for the get method
     it('get a user by username', (done) => {
       // 1. Create a user
       const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov',
        password:'blabla'
      }
       // 2. Check the result of the get method is correct
       users.get(user.username, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result.firstname).to.be.equal(user.firstname)
        expect(result.lastname).to.be.equal(user.lastname)
        done()
      })
     })

     it('get all', (done) => {
      // 2. Check the result of the get method is correct
      users.getall( (err, result) => {
       expect(err).to.be.equal(null)
       done()
     })
    })
   })
  

   describe('Update', ()=> {
    // TODO Create test for the get method
    it('update a user by username', (done) => {
      // 1. Create a user
      const user = {
       username: 'aminetsl',
       firstname: 'amine',
       lastname: 'ts',
       password:'blabla'
     }
     
      // 2. Check the result of the put method is correct
      users.update(user,user.username, (err, result) => {

       expect(err).to.be.equal(null)
       expect(result).to.be.equal('OK')
       done()
     })
    })
  })


  describe('Delete', ()=> {
    // TODO Create test for the get method
    it('delete a user by username', (done) => {
      // 1. Create a user
      var user = [];
      user[0] = "c";
      user[1] = "d";
     
      // 2. Check the result of the put method is correct
      users.delete(user[0], (err, result) => {

       expect(err).to.be.equal(null)
       expect(result).to.be.equal(1)
       
     })

     users.delete(user[1], (err, result) => {

      expect(err).to.be.equal(null)
      expect(result).to.be.equal(1)
      done()
    })
    })
  })
})
