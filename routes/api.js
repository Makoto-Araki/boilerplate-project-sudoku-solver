'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

      // Initialize
      let arr1 = [];
      let obj1 = { valid: true };

      // Required field check
      if (!req.body.hasOwnProperty('puzzle') ||
          !req.body.hasOwnProperty('coordinate') ||
          !req.body.hasOwnProperty('value')) {
        return res.json({ error: 'Required field(s) missing' });
      }

      // 81 characters long check
      if (req.body.puzzle.length !== 81) {
        return res.json({ error: 'Expected puzzle to be 81 characters long' });
      }

      // Invalid character check in puzzle
      if (/^[1-9\.]{81}$/.test(req.body.puzzle) !== true) {
        return res.json({ error: 'Invalid characters in puzzle' });
      }

      // Invalid coordinate check
      if (/^[A-I]{1}[1-9]{1}$/.test(req.body.coordinate) !== true) {
        return res.json({ error: 'Invalid coordinate' });
      }

      // Invalid value check
      if ((/^[1-9]{1}$/.test(req.body.value)) !== true) {
        return res.json({ error: 'Invalid value' });
      }

      // Replacement check
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

      // 81 characters long check
      if (req.body.puzzle.length !== 81) {
        return res.json({ error: 'Expected puzzle to be 81 characters long' });
      }

      // Invalid character check
      if (!solver.validate(req.body.puzzle)) {
        return res.json({ error: 'Invalid characters in puzzle' });
      }

      // Puzzle solve
      let result = solver.solve(req.body.puzzle);

      // Result is going to be returned
      if (!result) {
        return res.json({ error: 'Puzzle cannot be solved' });
      } else if (result === 'Puzzle cannot be solved') {
        return res.json({ error: 'Puzzle cannot be solved' });
      } else {
        return res.json({ solution: result })
      }
      
    });
};
