
class SudokuSolver {

  // Costructor
  constructor() {
    this.maxLoop = 1;
    this.rows = [
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
    this.cols = [
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
    this.regs = [
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
  }
  
  // Invalid character check and 81 characters check
  validate(puzzleString) {
    if (/[1-9\.]{81}/.test(puzzleString)) {
      return true;
    } else {
      return false;
    };
  }

  checkRow(puzzleString, row) {
    //
  }

  checkCol(puzzleString, col) {
    //
  }

  checkReg(puzzleString, reg) {
    //
  }

  // Extract array data from main according to arr
  extract(main, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(main[arr[i]]);
    }
    return result;
  }

  // Find data according to row or col
  findData(val, pos, direction) {
    let curent = -1;
    let result = false;
    if (direction === 'row') {
      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i].indexOf(pos) !== -1) {
          curent = i;
          break;
        }
      }
      for (let i = 0; i < this.rows[curent].length; i++) {
        if (this.rows[curent][i] === val) {
          result = true;
          break;
        }
      }
    }
    if (direction === 'col') {
      for (let i = 0; i < this.cols.length; i++) {
        if (this.cols[i].indexOf(pos) !== -1) {
          curent = i;
          break;
        }
      }
      for (let i = 0; i < this.cols[curent].length; i++) {
        if (this.cols[curent][i] === val) {
          result = true;
          break;
        }
      }
    }
    return result;
  }
  
  // Puzzle Solve Method
  solve(puzzleString) {
    let result = puzzleString;
    //console.log(`BEFORE : ${result}`);
    for (let i = 0; i < this.maxLoop; i++) {

      /* Example values
        (result) ===
          ..9..5.1.  // 9char
          85.4....2  // 9char
          432......  // 9char
          1...69.83  // 9char
          .9.....6.  // 9char
          62.71...9  // 9char
          ......194  // 9char
          5....4.37  // 9char
          .4.3..6..  // 9char
      */
      
      let regArray = [];
      for (let j = 0; j < this.regs.length; j++) {
        regArray.push(this.extract(result, this.regs[j]))
      }

      /* Example values
        (regArray) ===
          [
            [ '.', '.', '9', '8', '5', '.', '4', '3', '2' ],
            [ '.', '.', '5', '4', '.', '.', '.', '.', '.' ],
            [ '.', '1', '.', '.', '.', '2', '.', '.', '.' ],
            [ '1', '.', '.', '.', '9', '.', '6', '2', '.' ],
            [ '.', '6', '9', '.', '.', '.', '7', '1', '.' ],
            [ '.', '8', '3', '.', '6', '.', '.', '.', '9' ],
            [ '.', '.', '.', '5', '.', '.', '.', '4', '.' ],
            [ '.', '.', '.', '.', '.', '4', '3', '.', '.' ],
            [ '1', '9', '4', '.', '3', '7', '6', '.', '.' ],
          ]
      */

      for (let j = 0; j < regArray.length; j++) {
        let curentReg = j;
        let tempArray = regArray[i].sort();
        let lackArray = [];

        for (let k = 1; k <= 9; k++) {
          if (tempArray.indexOf(k.toString()) === -1) {
            lackArray.push(k.toString());
          }
        }
        
        /* Example values
          (curentReg) === 0
          (tempArray) === [ '.', '.', '.', '2', '3', '4', '5', '8', '9' ]
          (lackArray) === [ '1', '6', '7' ]
        */
        
        /*
        for (let k = 0; k < lackArray.length; k++) {
          let count = 0;
          let position = -1;
          for (let l = 0; l < this.regs[curentReg].length; l++) {
            if (result[this.regs[currentReg][l]] !== '.') {
              continue;
            } else {
              if (this.findData(lackArray[k], this.regs[currentReg][l], 'row') === false &&
                  this.findData(lackArray[k], this.regs[currentReg][l], 'col') === false) {
                count++;
                if (count === 1) {
                  position = this.regs[curentReg][l];
                }
              }
            }
          }
          if (count === 1) {
            result[this.regs[curentReg][position]] = lackArray[k];
          }
        }
        */
      }
      
    }
    //console.log(`AFTER  : ${result}`);
    //return result;
  }
}

module.exports = SudokuSolver;
