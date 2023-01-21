'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

      // Initialize and replacement check
      let arr1 = [];
      let obj1 = { valid: true };
      let result = solver.check(req.body.puzzle, req.body.coordinate, req.body.value);

      if (result[0] === true || result[1] === true || result[2] === true) {
        obj1.valid = false;
      }

      if (result[0] === true) {
        arr1.push('row');
      }

      if (result[1] === true) {
        arr1.push('column');
      }

      if (result[2] === true) {
        arr1.push('region');
      }

      if (arr1.length !== 0) {
        obj1.conflict = arr1;
      }

      // Result is going to be returned
      return res.json(obj1);
    });
    
  app.route('/api/solve')
    .post((req, res) => {

      // Required field check
      if (!req.body.hasOwnProperty('puzzle')) {
        return res.json({ error: 'Required field missing' });
      }

      // Invalid character check
      if (!solver.validate(req.body.puzzle)) {
        return res.json({ error: 'Invalid characters in puzzle' });
      }

      // 81 characters long check
      if (!solver.validate(req.body.puzzle)) {
        return res.json({ error: 'Expected puzzle to be 81 characters long' });
      }

      // Puzzle solve
      let result = solver.solve(req.body.puzzle);

      // Result is going to be returned
      if (!result) {
        return res.json({ error: 'Puzzle cannot be solved' });
      } else {
        return res.json({ solution: result })
      }
      
    });
};
