
class SudokuSolver {

  // Costructor
  constructor() {
    this.strs = '';
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
    if (/^[1-9\.]{81}$/.test(puzzleString)) {
      return true;
    } else {
      return false;
    };
  }

  // Sub Method
  searchRow(idx, val) {
    let tmp = -1;
    let result = false;
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].indexOf(idx) !== -1) {
        tmp = i;
        break;
      }
    }
    for (let i = 0; i < this.rows[tmp].length; i++) {
      if (this.strs[this.rows[tmp][i]] === val) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Sub Method
  searchCol(idx, val) {
    let tmp = -1;
    let result = false;
    for (let i = 0; i < this.cols.length; i++) {
      if (this.cols[i].indexOf(idx) !== -1) {
        tmp = i;
        break;
      }
    }
    for (let i = 0; i < this.cols[tmp].length; i++) {
      if (this.strs[this.cols[tmp][i]] === val) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Sub Method
  searchReg(idx, val) {
    let tmp = -1;
    let result = false;
    for (let i = 0; i < this.regs.length; i++) {
      if (this.regs[i].indexOf(idx) !== -1) {
        tmp = i;
        break;
      }
    }
    for (let i = 0; i < this.regs[tmp].length; i++) {
      if (this.strs[this.regs[tmp][i]] === val) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Replacement Check Method
  check(puzzleString, coordinate, value) {
    this.strs = puzzleString;
    let char1 = coordinate[0];
    let char2 = parseInt(coordinate[1]);
    switch (char1) {
      case 'A':
        char1 = 0;
        break;
      case 'B':
        char1 = 1;
        break;
      case 'C':
        char1 = 2;
        break;
      case 'D':
        char1 = 3;
        break;
      case 'E':
        char1 = 4;
        break;
      case 'F':
        char1 = 5;
        break;
      case 'G':
        char1 = 6;
        break;
      case 'H':
        char1 = 7;
        break;
      case 'I':
        char1 = 8;
        break;
    }
    let idx = char1 * 9 + (char2 - 1);
    if (this.strs[idx] !== '.') {
      this.strs = this.strs.substring(0, idx) + '.' + this.strs.substring(idx+1);
    }
    let result = [ false, false, false ];
    result[0] = this.searchRow(idx, value);
    result[1] = this.searchCol(idx, value);
    result[2] = this.searchReg(idx, value);
    return result;
  }

  // Final Check Method
  finalCheck() {
    let sample = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // row check
    for (let i = 0; i < this.rows.length; i++) {
      let temp1 = [];
      for (let j = 0; j < this.rows[i].length; j++) {
        temp1.push(this.strs[j]);
      }
      temp1.sort();
      if (temp1.toString() !== sample.toString()) {
        return false;
      }
    }
    // col check
    for (let i = 0; i < this.cols.length; i++) {
      let temp2 = [];
      for (let j = 0; j < this.cols[i].length; j++) {
        temp2.push(this.strs[j]);
      }
      temp2.sort();
      if (temp2.toString() !== sample.toString()) {
        return false;
      }
    }
    // reg check
    for (let i = 0; i < this.regs.length; i++) {
      let temp3 = [];
      for (let j = 0; j < this.regs[i].length; j++) {
        temp3.push(this.strs[j]);
      }
      temp3.sort();
      if (temp3.toString() !== sample.toString()) {
        return false;
      }
    }
    // return value
    return true;
  }
  
  // Puzzle Solve Method
  solve(puzzleString) {
    this.strs = puzzleString;
    for (let i = 0; i < 10; i++) {
      let arr = [];
      for (let j = 0; j < 81; j++) {
        let tmp = [];
        arr.push(tmp);
      }
      for (let j = 0; j < this.strs.length; j++) {
        if (this.strs[j] === '.') {
          for (let k = 1; k <= 9; k++) {
            if (this.searchRow(j, k.toString()) === false &&
                this.searchCol(j, k.toString()) === false &&
                this.searchReg(j, k.toString()) === false) {
              arr[j].push(k.toString());
            }
          }
        }
      }
      for (let j = 0; j < 81; j++) {
        if (arr[j].length === 1) {
          this.strs = this.strs.substring(0, j) + arr[j][0] + this.strs.substring(j+1);
        }
      }
    }
    if (this.finalCheck() === true) {
      return this.strs;
    } else {
      return 'Puzzle cannot be solved';
    }
  }
  
}

module.exports = SudokuSolver;
