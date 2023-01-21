'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

      // Check replacement
      //let result = solver.check(req.body.puzzle, req.body.coordinate. req.body.value);
      
      // For Debug
      console.log('CHECK');
      console.log(`AAA : ${req.body.puzzle}`);
      console.log(`BBB : ${req.body.coordinate}`);
      console.log(`CCC : ${req.body.value}`);
      
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
