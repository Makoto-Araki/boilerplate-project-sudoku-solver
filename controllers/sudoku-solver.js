
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

  // Find data according to row
  /*
  findDataRow(arr, pos, val) {
    let curent = -1;
    let result = false;
    for (let i = 0; i < this.rows.length; i++) {
      console.log(`CCC : ${this.rows[i]}`);
      console.log(`DDD : ${pos}`);
      console.log(`EEE : ${val}`);
      if (this.rows[i].indexOf(pos) !== -1) {
        curent = i;
        break;
      }
    }
    console.log(`FFF : ${curent}`);
    for (let i = 0; i < this.rows[curent].length; i++) {
      console.log(`GGG : ${arr[this.rows[curent]]}`);
      if (arr[this.rows[curent][i]] === val) {
        result = true;
        break;
      }
    }
    return result;
  }
  */
  
  // Find data according to col
  /*
  findDataCol(arr, pos, val) {
    let curent = -1;
    let result = false;
    for (let i = 0; i < this.cols.length; i++) {
      if (this.cols[i].indexOf(pos) !== -1) {
        curent = i;
        break;
      }
    }
    for (let i = 0; i < this.cols[curent].length; i++) {
      if (arr[this.cols[curent][i]] === val) {
        result = true;
        break;
      }
    }
    return result;
  }
  */
  
  // Puzzle Solve Method
  solve(puzzleString) {
    for (let i = 0; i < this.maxLoop; i++) {

      /* Example
        puzzleString =>
          7.9..5.1.  // 9chars
          85.4....2  // 9chars
          432......  // 9chars
          1...69.83  // 9chars
          .9.....6.  // 9chars
          62.71...9  // 9chars
          ......194  // 9chars
          5....4.37  // 9chars
          .4.3..6..  // 9chars
      */
      
      let regArray = [];
      for (let j = 0; j < this.regs.length; j++) {
        regArray.push(this.extract(puzzleString, this.regs[j]))
      }

      /* Example
        regArray =>
          [
            [ '.', '.', '9', '8', '5', '.', '4', '3', '2' ],  => tempArray[0]
            [ '.', '.', '5', '4', '.', '.', '.', '.', '.' ],  => tempArray[1]
            [ '.', '1', '.', '.', '.', '2', '.', '.', '.' ],  => tempArray[2]
            [ '1', '.', '.', '.', '9', '.', '6', '2', '.' ],  => tempArray[3]
            [ '.', '6', '9', '.', '.', '.', '7', '1', '.' ],  => tempArray[4]
            [ '.', '8', '3', '.', '6', '.', '.', '.', '9' ],  => tempArray[5]
            [ '.', '.', '.', '5', '.', '.', '.', '4', '.' ],  => tempArray[6]
            [ '.', '.', '.', '.', '.', '4', '3', '.', '.' ],  => tempArray[7]
            [ '1', '9', '4', '.', '3', '7', '6', '.', '.' ],  => tempArray[8]
          ]
      */

      for (let j = 0; j < regArray.length; j++) {
        console.log(`A01 : ${regArray[i]}`);
        let curentReg = j;
        let tempArray = regArray[i];
        let voidArray = [];
        let lackArray = [];

        for (let k = 0; k < this.regs[curentReg].length; k++) {
          if (puzzleString[this.regs[curentReg][k]] === '.') {
            voidArray.push(this.regs[curentReg][k]);
          }
        }

        for (let k = 1; k <= 9; k++) {
          if (tempArray.indexOf(k.toString()) === -1) {
            lackArray.push(k.toString());
          }
        }

        console.log(`A02 : ${curentReg}`);
        console.log(`A03 : ${tempArray}`);
        console.log(`A04 : ${voidArray}`);
        console.log(`A05 : ${lackArray}`);

        /* Example
          curentReg => 0
          tempArray => [ '.', '.', '9', '8', '5', '.', '4', '3', '2' ]
          voidArray => [  0 ,  1 ,  11 ]
          lackArray => [ '1', '6', '7' ]
        */
        
        for (let k = 0; k < voidArray.length; k++) {
          let tmp1 = -1;
          let tmp2 = -1;
          let flg1 = false;
          let flg2 = false;
          let sum = 0;
          let idx = [];
          let val = '';

          console.log(`B01 : ${tmp1}`);
          console.log(`B02 : ${tmp2}`);
          
          for (let l = 0; l < lackArray.length; l++) {
            console.log(`C01 : Process is here.`);

            for (let m = 0; m < this.rows.length; m++) {
              console.log(`D01 : ${this.rows[m]}`);
              console.log(`D02 : ${voidArray[k]}`);
              if (this.rows[m].indexOf(voidArray[k]) !== -1) {
                tmp1 = m;
                break;
              }
              console.log(`D03 : ${tmp1}`);
            }
            for (let m = 0; m < this.rows[tmp1].length; i++) {
              if (puzzleString[this.rows[tmp1][m]] === lackArray[l]) {
                flg1 = true;
                break;
              }
            }

            for (let m = 0; m < this.cols.length; m++) {
              if (this.cols[m].indexOf(voidArray[k]) !== -1) {
                tmp2 = m;
                break;
              }
            }
            for (let m = 0; m < this.cols[tmp2].length; i++) {
              if (puzzleString[this.cols[tmp2][m]] === lackArray[l]) {
                flg2 = true;
                break;
              }
            }

            console.log(`>> B01 : ${voidArray[k]}`);
            console.log(`>> B02 : ${lackArray[l]}`);
            console.log(`>> B03 : ${flg1}`);
            console.log(`>> B04 : ${flg2}`);
            
            if (flg1 === false && flg2 === false) {
              console.log(`>>>> C01 : ${sum}`);
              console.log(`>>>> C02 : ${idx}`);
              sum = sum + 1;
              idx.push(voidArray[k]);
              val = lackArray[l];
            }
          }
          //console.log(`SUM : ${sum}`);
          if (sum === 1) {
            puzzleString[idx[0]] = val;
            //console.log(`AAA : ${result}`);
          }
        }
      }
      
    }
    //console.log(`AFTER  : ${result}`);
    //return result;
  }
}

module.exports = SudokuSolver;
