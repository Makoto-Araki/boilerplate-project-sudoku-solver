class SudokuSolver {

 /*
  CHAR 00 - 08 : A (ROW1)
  CHAR 09 - 17 : B (ROW2)
  CHAR 18 - 26 : C (ROW3)
  CHAR 27 - 35 : D (ROW4)
  CHAR 36 - 44 : E (ROW5)
  CHAR 45 - 53 : F (ROW6)
  CHAR 54 - 62 : G (ROW7)
  CHAR 63 - 71 : H (ROW8)
  CHAR 72 - 80 : I (ROW9)
  */
  
  validate(puzzleString) {
    const reg = /[1-9\.]{81}/;
    return reg.test(puzzleString);
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

