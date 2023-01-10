// Correspondence between puzzleString and row
const rowA = [  0,  1,  2,  3,  4,  5,  6,  7,  8];
const rowB = [  9, 10, 11, 12, 13, 14, 15, 16, 17];
const rowC = [ 18, 19, 20, 21, 22, 23, 24, 25, 26];
const rowD = [ 27, 28, 29, 30, 31, 32, 33, 34, 35];
const rowE = [ 36, 37, 38, 39, 40, 41, 42, 43, 44];
const rowF = [ 45, 46, 47, 48, 49, 50, 51, 52, 53];
const rowG = [ 54, 55, 56, 57, 58, 59, 60, 61, 62];
const rowH = [ 63, 64, 65, 66, 67, 68, 69, 70, 71];
const rowI = [ 72, 73, 74, 75, 76, 77, 78, 79, 80];

// Correspondence between puzzleString and col
const col1 = [  0,  9, 18, 27, 36, 45, 54, 63, 72];
const col2 = [  1, 10, 19, 28, 37, 46, 55, 64, 73];
const col3 = [  2, 11, 20, 29, 38, 47, 56, 65, 74];
const col4 = [  3, 12, 21, 30, 39, 48, 57, 66, 75];
const col5 = [  4, 13, 22, 31, 40, 49, 58, 67, 76];
const col6 = [  5, 14, 23, 32, 41, 50, 59, 68, 77];
const col7 = [  6, 15, 24, 33, 42, 51, 60, 69, 78];
const col8 = [  7, 16, 25, 34, 43, 52, 61, 70, 79];
const col9 = [  8, 17, 26, 35, 44, 53, 62, 71, 80];

// Correspondence between puzzleString and region
const reg1 = [  0,  1,  2,  9, 10, 11, 18, 19, 20];
const reg2 = [  3,  4,  5, 12, 13, 14, 21, 22, 23];
const reg3 = [  6,  7,  8, 15, 16, 17, 24, 25, 26];
const reg4 = [ 27, 28, 29, 36, 37, 38, 45, 46, 47];
const reg5 = [ 30, 31, 32, 39, 40, 41, 48, 49, 50];
const reg6 = [ 33, 34, 35, 42, 43, 44, 51, 52, 53];
const reg7 = [ 54, 55, 56, 63, 64, 65, 72, 73, 74];
const reg8 = [ 57, 58, 59, 66, 67, 68, 75, 76, 77];
const reg9 = [ 60, 61, 62, 69, 70, 71, 78, 79, 80];

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
        this.checkPlacement(puzzleString, rowA);
        break;
      case 2:
        this.checkPlacement(puzzleString, rowB);
        break;
      case 3:
        this.checkPlacement(puzzleString, rowC);
        break;
      case 4:
        this.checkPlacement(puzzleString, rowD);
        break;
      case 5:
        this.checkPlacement(puzzleString, rowE);
        break;
      case 6:
        this.checkPlacement(puzzleString, rowF);
        break;
      case 7:
        this.checkPlacement(puzzleString, rowG);
        break;
      case 8:
        this.checkPlacement(puzzleString, rowH);
        break;
      case 9:
        this.checkPlacement(puzzleString, rowI);
        break;
    }
  }

  checkColPlacement(puzzleString, column) {
    switch (column) {
      case 1:
        this.checkPlacement(puzzleString, col1);
        break;
      case 2:
        this.checkPlacement(puzzleString, col2);
        break;
      case 3:
        this.checkPlacement(puzzleString, col3);
        break;
      case 4:
        this.checkPlacement(puzzleString, col4);
        break;
      case 5:
        this.checkPlacement(puzzleString, col5);
        break;
      case 6:
        this.checkPlacement(puzzleString, col6);
        break;
      case 7:
        this.checkPlacement(puzzleString, col7);
        break;
      case 8:
        this.checkPlacement(puzzleString, col8);
        break;
      case 9:
        this.checkPlacement(puzzleString, col9);
        break;
    }
  }

  checkRegionPlacement(puzzleString, region) {
    switch (region) {
      case 1:
        this.checkPlacement(puzzleString, reg1);
        break;
      case 2:
        this.checkPlacement(puzzleString, reg2);
        break;
      case 3:
        this.checkPlacement(puzzleString, reg3);
        break;
      case 4:
        this.checkPlacement(puzzleString, reg4);
        break;
      case 5:
        this.checkPlacement(puzzleString, reg5);
        break;
      case 6:
        this.checkPlacement(puzzleString, reg6);
        break;
      case 7:
        this.checkPlacement(puzzleString, reg7);
        break;
      case 8:
        this.checkPlacement(puzzleString, reg8);
        break;
      case 9:
        this.checkPlacement(puzzleString, reg9);
        break;
    }
  }

  solve(puzzleString) {
    if (!this.validate(puzzleString)) {
      return new Error('puzzle could not be solved');
    } else {

      // Do not process more than the specified number of times to avoid infinite loops
      for (let i = 0 i < 10; i++) {
        for (let i = 0; i < puzzleString.length; i++) {
          if () {}
        }
      }

      return new Error('puzzle could not be solved');
    }
  }
}

module.exports = SudokuSolver;

