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

  CHAR 00, 09, 18, 27, 36, 45, 54, 63, 72 : 1 (COL1)
  CHAR 01, 10, 19, 28, 37, 46, 55, 64, 73 : 2 (COL2)
  CHAR 02, 11, 20, 29, 38, 47, 56, 65, 74 : 3 (COL3)
  CHAR 03, 12, 21, 30, 39, 48, 57, 66, 75 : 4 (COL4)
  CHAR 04, 13, 22, 31, 40, 49, 58, 67, 76 : 5 (COL5)
  CHAR 05, 14, 23, 32, 41, 50, 59, 68, 77 : 6 (COL6)
  CHAR 06, 15, 24, 33, 42, 51, 60, 69, 78 : 7 (COL7)
  CHAR 07, 16, 25, 34, 43, 52, 61, 70, 79 : 8 (COL8)
  CHAR 08, 17, 26, 35, 44, 53, 62, 71, 80 : 9 (COL9)

  CHAR 00, 01, 02, 09, 10, 11, 18, 19, 20 : 1 (REGION1)
  CHAR 03, 04, 05, 12, 13, 14, 21, 22, 23 : 2 (REGION2)
  CHAR 06, 07, 08, 15, 16, 17, 24, 25, 26 : 3 (REGION3)
  //
  */
  
  validate(puzzleString) {
    const reg = /[1-9\.]{81}/;
    return reg.test(puzzleString);
  }

  checkRowPlacement(puzzleString, row, column, value) {
    switch row {
      case 1:
        //
        break;
      case 2:
        //
        break;
      case 3:
        //
        break;
    }
  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

