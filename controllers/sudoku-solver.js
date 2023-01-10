// Correspondence between puzzleString and coordinate
const coordinate = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9',
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9',
  'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9',
  'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9',
  'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9',
];

// Correspondence between puzzleString and row
const rows = [
  [  0,  1,  2,  3,  4,  5,  6,  7,  8] ,
  [  9, 10, 11, 12, 13, 14, 15, 16, 17] ,
  [ 18, 19, 20, 21, 22, 23, 24, 25, 26] ,
  [ 27, 28, 29, 30, 31, 32, 33, 34, 35] ,
  [ 36, 37, 38, 39, 40, 41, 42, 43, 44] ,
  [ 45, 46, 47, 48, 49, 50, 51, 52, 53] ,
  [ 54, 55, 56, 57, 58, 59, 60, 61, 62] ,
  [ 63, 64, 65, 66, 67, 68, 69, 70, 71] ,
  [ 72, 73, 74, 75, 76, 77, 78, 79, 80] ,
];

// Correspondence between puzzleString and col
const cols = [
  [  0,  9, 18, 27, 36, 45, 54, 63, 72] ,
  [  1, 10, 19, 28, 37, 46, 55, 64, 73] ,
  [  2, 11, 20, 29, 38, 47, 56, 65, 74] ,
  [  3, 12, 21, 30, 39, 48, 57, 66, 75] ,
  [  4, 13, 22, 31, 40, 49, 58, 67, 76] ,
  [  5, 14, 23, 32, 41, 50, 59, 68, 77] ,
  [  6, 15, 24, 33, 42, 51, 60, 69, 78] ,
  [  7, 16, 25, 34, 43, 52, 61, 70, 79] ,
  [  8, 17, 26, 35, 44, 53, 62, 71, 80] ,
];

// Correspondence between puzzleString and region
const regs = [
  [  0,  1,  2,  9, 10, 11, 18, 19, 20] ,
  [  3,  4,  5, 12, 13, 14, 21, 22, 23] ,
  [  6,  7,  8, 15, 16, 17, 24, 25, 26] ,
  [ 27, 28, 29, 36, 37, 38, 45, 46, 47] ,
  [ 30, 31, 32, 39, 40, 41, 48, 49, 50] ,
  [ 33, 34, 35, 42, 43, 44, 51, 52, 53] ,
  [ 54, 55, 56, 63, 64, 65, 72, 73, 74] ,
  [ 57, 58, 59, 66, 67, 68, 75, 76, 77] ,
  [ 60, 61, 62, 69, 70, 71, 78, 79, 80] ,
];

class SudokuSolver {

  validate(puzzleString) {
    if (/[1-9\.]{81}/.test(puzzleString)) {
      return true;
    } else {
      return false;
    };
  }

  // I added
  checkPlacement(puzzleString, arr) {
    let tmp = [];
    for (let i = 1; i < arr.length; i++) {
      tmp.push(puzzleString[arr[i]]);
    }
    tmp.sort();
    if (tmp === ['1', '2', '3', '4', '5', '6', '7', '8', '9']) {
      return true;
    } else {
      return false;
    }
  }
  
  checkRowPlacement(puzzleString, row) {
    switch (row) {
      case 1:
        this.checkPlacement(puzzleString, rows[0]);
        break;
      case 2:
        this.checkPlacement(puzzleString, rows[1]);
        break;
      case 3:
        this.checkPlacement(puzzleString, rows[2]);
        break;
      case 4:
        this.checkPlacement(puzzleString, rows[3]);
        break;
      case 5:
        this.checkPlacement(puzzleString, rows[4]);
        break;
      case 6:
        this.checkPlacement(puzzleString, rows[5]);
        break;
      case 7:
        this.checkPlacement(puzzleString, rows[6]);
        break;
      case 8:
        this.checkPlacement(puzzleString, rows[7]);
        break;
      case 9:
        this.checkPlacement(puzzleString, rows[8]);
        break;
    }
  }

  checkColPlacement(puzzleString, column) {
    switch (column) {
      case 1:
        this.checkPlacement(puzzleString, cols[0]);
        break;
      case 2:
        this.checkPlacement(puzzleString, cols[1]);
        break;
      case 3:
        this.checkPlacement(puzzleString, cols[2]);
        break;
      case 4:
        this.checkPlacement(puzzleString, cols[3]);
        break;
      case 5:
        this.checkPlacement(puzzleString, cols[4]);
        break;
      case 6:
        this.checkPlacement(puzzleString, cols[5]);
        break;
      case 7:
        this.checkPlacement(puzzleString, cols[6]);
        break;
      case 8:
        this.checkPlacement(puzzleString, cols[7]);
        break;
      case 9:
        this.checkPlacement(puzzleString, cols[8]);
        break;
    }
  }

  checkRegionPlacement(puzzleString, region) {
    switch (region) {
      case 1:
        this.checkPlacement(puzzleString, regs[0]);
        break;
      case 2:
        this.checkPlacement(puzzleString, regs[1]);
        break;
      case 3:
        this.checkPlacement(puzzleString, regs[2]);
        break;
      case 4:
        this.checkPlacement(puzzleString, regs[3]);
        break;
      case 5:
        this.checkPlacement(puzzleString, regs[4]);
        break;
      case 6:
        this.checkPlacement(puzzleString, regs[5]);
        break;
      case 7:
        this.checkPlacement(puzzleString, regs[6]);
        break;
      case 8:
        this.checkPlacement(puzzleString, regs[7]);
        break;
      case 9:
        this.checkPlacement(puzzleString, regs[8]);
        break;
    }
  }

  // I added
  checkExistSameNumber(char, arr) {
    for (let i = 0; i < arr.length; i++) {
      if ((char === arr[i]) {
        return true;
      }
    }
    return false;
  }

  // I added
  searchRowPosition(num) {
    for (let i = 0; i < rows.length; i++) {
      if (num in rows[i]) {
        return i;
      }
    }
    return -1;
  }

  // I added
  searchColPosition(num) {
    for (let i = 0; i < cols.length; i++) {
      if (num in cols[i]) {
        return i;
      }
    }
    return -1;
  }

  // I added
  searchRegPosition(num) {
    for (let i = 0; i < regs.length; i++) {
      if (num in regs[i]) {
        return i;
      }
    }
    return -1;
  }

  // Main Method for this class
  solve(puzzleString) {

    // Check input string
    if (!this.validate(puzzleString)) {
      return new Error('puzzle could not be solved');
    } else {

      // Do not process more than the specified number of times to avoid infinite loops
      for (let i = 0 i < 10; i++) {

        // For Debug
        console.log(`Loop : ${i}`);
        console.log(`------------------------------`);

        // Scanning in puzzleString
        for (let j = 0; j < puzzleString.length; j++) {

          // For Debug
          console.log(`coordinate : ${coordinate[j]}`);
          
          if (puzzleString[j] !== '.') {
            continue;
          } else {

            //　Check if which numbers are applicable
            for (let k = 1; k <=9; k++) {

              // For Debug
              console.log(`Check if ${k} is applicable in ${coordinate[j]}`);

              // Determining the search range
              let tmp1 = this.searchRowPosition(j);
              let tmp2 = this.searchColPosition(j);
              let tmp3 = this.searchRegPosition(j);

              // Error check
              if (tmp1 === -1 || tmp2 === -1 || tmp3 === -1) {
                return new Error('puzzle could not be solved');
              }

              // Basic check
              if (this.checkExistSameNumber(puzzleString[j], puzzleString[rows[tmp1]]) ||
                  this.checkExistSameNumber(puzzleString[j], puzzleString[cols[tmp2]]) ||
                  this.checkExistSameNumber(puzzleString[j], puzzleString[regs[tmp3]])) {
                continue;
              }
            }
            
          }
        }
        
        // For Debug
        console.log(`------------------------------`);
      }

      return new Error('puzzle could not be solved');
    }
  }
}

module.exports = SudokuSolver;

