const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

let client

describe('Users REST API', () => {

  before(() => {
    client = require('../src/dbClient')
  })
  
  after(()=> {
    app.close()
    client.quit()
  })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'a',
        firstname: 'Amine',
        lastname: 'Tsouli',
        password:'blabla'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
    
    it('pass wrong parameters', (done) => {
      const user = {
        firstname: 'Amine',
        lastname: 'Tsouli'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(400)
          chai.expect(res.body.status).to.equal('error')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('GET /user', ()=> {
    // TODO Create test for the get method
    it('get user by username', (done) => {
      const user = {
        username: 'a',
        firstname: 'Amine',
        lastname: 'Tsouli'
      }
      chai.request(app)
        .get('/user/'+user.username)
        .send(user.username)
        .then((res) => {
          chai.expect(res).to.have.status(200)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })

    it('get all usernames', (done) => {
      chai.request(app)
        .get('/user/')
        .then((res) => {
          chai.expect(res).to.have.status(200)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('UPDATE /user', ()=> {
    // TODO Create test for the get method
    it('update user by username', (done) => {
      const user = {
        username: 'a',
        firstname: 'amine',
        lastname: 'tsouli',
        password:'blabl'
      }
      chai.request(app)
        .put('/user/'+user.username)
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(200)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('DELETE /user', ()=> {
    // TODO Create test for the get method
    it('delete user by username', (done) => {
      const user = {
        username: 'a',
        firstname: 'amine',
        lastname: 'tsouli',
        password:'blabla'
      }
      chai.request(app)
        .delete('/user/'+user.username)
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(200)
          chai.expect(res.body.status).to.equal("success")
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })
})
