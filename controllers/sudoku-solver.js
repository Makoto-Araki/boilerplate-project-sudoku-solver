class SudokuSolver {

 /*
  CHAR 00 - 08 : RA (ROW1)
  CHAR 09 - 17 : RB (ROW2)
  CHAR 18 - 26 : RC (ROW3)
  CHAR 27 - 35 : RD (ROW4)
  CHAR 36 - 44 : RE (ROW5)
  CHAR 45 - 53 : RF (ROW6)
  CHAR 54 - 62 : RG (ROW7)
  CHAR 63 - 71 : RH (ROW8)
  CHAR 72 - 80 : RI (ROW9)

  CHAR 00, 09, 18, 27, 36, 45, 54, 63, 72 : C1 (COL1)
  CHAR 01, 10, 19, 28, 37, 46, 55, 64, 73 : C2 (COL2)
  CHAR 02, 11, 20, 29, 38, 47, 56, 65, 74 : C3 (COL3)
  CHAR 03, 12, 21, 30, 39, 48, 57, 66, 75 : C4 (COL4)
  CHAR 04, 13, 22, 31, 40, 49, 58, 67, 76 : C5 (COL5)
  CHAR 05, 14, 23, 32, 41, 50, 59, 68, 77 : C6 (COL6)
  CHAR 06, 15, 24, 33, 42, 51, 60, 69, 78 : C7 (COL7)
  CHAR 07, 16, 25, 34, 43, 52, 61, 70, 79 : C8 (COL8)
  CHAR 08, 17, 26, 35, 44, 53, 62, 71, 80 : C9 (COL9)

  CHAR 00, 01, 02, 09, 10, 11, 18, 19, 20 : REG1 (REGION1)
  CHAR 03, 04, 05, 12, 13, 14, 21, 22, 23 : REG2 (REGION2)
  CHAR 06, 07, 08, 15, 16, 17, 24, 25, 26 : REG3 (REGION3)
  CHAR 27, 28, 29, 36, 37, 38, 45, 46, 47 : REG4 (REGION4)
  CHAR 30, 31, 32, 39, 40, 41, 48, 49, 50 : REG5 (REGION5)
  CHAR 33, 34, 35, 42, 43, 44, 51, 52, 53 : REG6 (REGION6)
  CHAR 54, 55, 56, 63, 64, 65, 72, 73, 74 : REG7 (REGION7)
  CHAR 57, 58, 59, 66, 67, 68, 75, 76, 77 : REG8 (REGION8)
  CHAR 60, 61, 62, 69, 70, 71, 78, 79, 80 : REG9 (REGION9)
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

