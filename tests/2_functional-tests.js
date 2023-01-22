const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const str1 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
const str2 = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
const str3 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6';
const str4 = 'A.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
const str5 = '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';

suite('Functional Tests', () => {
  // test1
  test('Solve a puzzle with valid puzzle string', (done) => {
    chai
    .request(server)
    .post('api/solve')
    .send({ puzzle: str1 })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test2
  test('Solve a puzzle with missing puzzle string', (done) => {
    chai
    .request(server)
    .post('api/solve')
    .send({ puzzle: str3 })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test3
  test('Solve a puzzle with invalid characters', (done) => {
    chai
    .request(server)
    .post('api/solve')
    .send({ puzzle: str4 })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test4
  test('Solve a puzzle with incorrect length', (done) => {
    chai
    .request(server)
    .post('api/solve')
    .send({ puzzle: str3 })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test5
  test('Solve a puzzle that cannot be solved', (done) => {
    chai
    .request(server)
    .post('api/solve')
    .send({ puzzle: str5 })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test6
  test('Check a puzzle placement with all fields', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: '7',
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test7
  test('Check a puzzle placement with single placement conflict', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: '5'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test8
  test('Check a puzzle placement with multiple placement conflicts', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: '1'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test9
  test('Check a puzzle placement with all placement conflicts', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: '1'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test10
  test('Check a puzzle placement with missing required fields', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test11
  test('Check a puzzle placement with invalid characters', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: 'X'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test12
  test('Check a puzzle placement with incorrect length', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str3,
      coordinate: 'A1',
      value: '7'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test13
  test('Check a puzzle placement with invalid placement coordinate', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'X1',
      value: '7'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });
  // test14
  test('Check a puzzle placement with invalid placement value', (done) => {
    chai
    .request(server)
    .post('api/check')
    .send({
      puzzle: str1,
      coordinate: 'A1',
      value: 'X'
    })
    .end((err, res) => {
      assert.equal(res, undefined);
      done();
    });
  });

});

