const chai = require('chai');
const assert = chai.assert;

// Module import
const Solver = require('../controllers/sudoku-solver.js');

// Instance
const solver = new Solver();

suite('Unit Tests', () => {
  const result = [ false, false, false ];
  const str1 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const str2 = '..9..5.1.85.4....2432......1...69.83.9X....6.62.71...9......1945....4.37.4.3..6..';
  const str3 = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6';
  const str4 = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const str5 = '8.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const str6 = 'Puzzle cannot be solved';

  // validate
  test('Logic handles a valid puzzle string of 81 characters', () => {
    assert.isTrue(solver.validate(str1));
  });
  test('Logic handles a puzzle string with invalid characters', () => {
    assert.isFalse(solver.validate(str2));
  });
  test('Logic handles a puzzle string that is not 81 characters in length', () => {
    assert.isFalse(solver.validate(str3));
  });

  // check
  test('Logic handles a valid row placement', () => {
    assert.sameMembers(solver.check(str1, 'A1', '7'), result);
  });
  test('Logic handles an invalid row placement', () => {
    assert.notSameMembers(solver.check(str1, 'A1', '1'), result);
  });
  test('Logic handles a valid column placement', () => {
    assert.sameMembers(solver.check(str1, 'A1', '7'), result);
  });
  test('Logic handles an invalid column placement', () => {
    assert.notSameMembers(solver.check(str1, 'A1', '6'), result);
  });
  test('Logic handles a valid region (3x3 grid) placement', () => {
    assert.sameMembers(solver.check(str1, 'A1', '7'), result);
  });
  test('Logic handles an invalid region (3x3 grid) placement', () => {
    assert.notSameMembers(solver.check(str1, 'A1', '2'), result);
  });

  // solve
  test('Valid puzzle strings pass the solver', () => {
    assert.equal(solver.solve(str1), str4);
  });
  test('Invalid puzzle strings fail the solver', () => {
    assert.equal(solver.solve(str5), str6);
  });
  test('Solver returns the expected solution for an incomplete puzzle', () => {
    assert.equal(solver.solve(str1), str4);
  });
  
});
