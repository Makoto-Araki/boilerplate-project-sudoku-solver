
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
    if (/[1-9\.]{81}/.test(puzzleString)) {
      return true;
    } else {
      return false;
    };
  }

  checkRow(idx, val) {
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

  checkCol(idx, val) {
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

  checkReg(idx, val) {
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

  // Puzzle Solve Method
  solve(puzzleString) {
    this.strs = puzzleString;
    for (let i = 0; i < 5; i++) {
      //console.log(`DEBUG : ${i} loop`);
      let arr = [];
      for (let j = 0; j < 81; j++) {
        let tmp = [];
        arr.push(tmp);
      }
      //console.log(`DEBUG : ${arr}`);
      //console.log(`DEBUG : ${arr.length}`);
      for (let j = 0; j < this.strs.length; j++) {
        if (this.strs[j] === '.') {
          //console.log(`DEBUG : index ${j} is going to process`);
          for (let k = 1; k <= 9; k++) {
            //console.log(`DEBUG : ${this.checkRow(j, k.toString())}`);
            //console.log(`DEBUG : ${this.checkCol(j, k.toString())}`);
            //console.log(`DEBUG : ${this.checkReg(j, k.toString())}`);
            if (this.checkRow(j, k.toString()) === false &&
                this.checkCol(j, k.toString()) === false &&
                this.checkReg(j, k.toString()) === false) {
              arr[j].push(k.toString());
            }
          }
        }
      }
      //console.log(`DEBUG : ${arr}`);
      for (let j = 0; j < 81; j++) {
        console.log(`DEBUG : ${j}`);
        console.log(`DEBUG : ${arr[j]}`);
        if (arr[j].length === 1) {
          this.strs[j] = arr[j][0];
        }
      }
      //console.log(`DEBUG : ${this.strs}`);
    }
  }
  
}

module.exports = SudokuSolver;
