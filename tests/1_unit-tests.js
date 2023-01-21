const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const solver = new Solver();
const str1 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
const str2 = '..9..5.1.85.4....2432......1...69.83.9X....6.62.71...9......1945....4.37.4.3..6..';
const str3 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6';

suite('Unit Tests', () => {

  // function validate
  suite('validate', () => {
    test('Logic handles a valid puzzle string of 81 characters', () => {
      assert.equal(solver.validate(str1), true);
    });
    test('Logic handles a puzzle string with invalid characters', () => {
      assert.equal(solver.validate(str2), false);
    });
    test('Logic handles a puzzle string that is not 81 characters in length', () => {
      assert.equal(solver.validate(str3), false);
    });
  });

});
