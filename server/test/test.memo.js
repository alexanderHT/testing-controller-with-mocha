const mongoose = require('mongoose')
const modelMemo = require('../models/memo_model')
let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let should = chai.should()

/* delete all memo before testing*/
// describe('before testing memo api, delete all data memo from database', () => {
//   it(('remove all memo data'), (done) => {
//     modelMemo.remove({}, function(err, data){
//       if (err) throw err
//       console.log('masuk');
//       console.log("done deleting data memo");
//     })
//     done();
//   })
// })

/* testing all memo */
describe('Testing memo api', () => {
  /* register new memo */
  it('Testing create One New memo to Database, and it should return a same memoid, title, and memo_text', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/memos')
      .send({
        memoid: 1,
        title: 'testing api memo',
        memo_text: 'we are testing api memo is working well or not'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.memoid.should.equal(1)
        res.body.title.should.equal('testing api memo')
        res.body.memo_text.should.equal('we are testing api memo is working well or not')
        done()
      })
  })

  /* get one memo */
  it('Testing Get One memo by memo id 1', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos/memoid/1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.memoid.should.equal(1)
        res.body.title.should.equal('testing api memo')
        res.body.memo_text.should.equal('we are testing api memo is working well or not')
        done()
      })
  })

  /* edit memo */
  it('Testing Edit memo by memoid 1', (done) => {
    chai.request('http://localhost:3000')
      .put('/api/memos')
      .send({
        memoid: 1,
        title: 'testing api memo for edit',
        memo_text: 'we are testing api memo edit is working well or not'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.memoid.should.equal(1)
        res.body.title.should.equal('testing api memo for edit')
        res.body.memo_text.should.equal('we are testing api memo edit is working well or not')
        done()
      })
  })

  /* delete memo */
  it('Testing Delete Blog', (done) => {
    chai.request('http://localhost:3000')
      .delete('/api/memos')
      .send({
        memoid: 1
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.memoid.should.equal(1)
        res.body.title.should.equal('testing api memo for edit')
        res.body.memo_text.should.equal('we are testing api memo edit is working well or not')
        done()
      })
  })
})
