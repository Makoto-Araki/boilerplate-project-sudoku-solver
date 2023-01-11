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

// Function returns the current row of the board according to input index
function findCurrenntRow(idx) {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].indexOf(idx) !== -1)
      return i;
  }
  return -1;
};

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

// Function returns the current col of the board according to input index
function findCurrenntCol(idx) {
  for (let i = 0; i < cols.length; i++) {
    if (cols[i].indexOf(idx) !== -1)
      return i;
  }
  return -1;
};

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

  // Invalid character and 81 characters check
  validate(puzzleString) {
    if (/[1-9\.]{81}/.test(puzzleString)) {
      return true;
    } else {
      return false;
    };
  }

  checkRowPlacement(puzzleString, row) {
    //
  }

  checkColPlacement(puzzleString, column) {
    //
  }

  checkRegionPlacement(puzzleString, region) {
    //
  }

  // Puzzle Solve Method
  solve(puzzleString) {
    let main = puzzleString;

    // Limit the number of puzzle solving processes to prevent infinite loops
    for (let a = 0; a < 10; a++) {
      console.log(`Loop ${a} start.`);

      // Processing within each region
      for (let b = 0; b < regs.length; b++) {
        console.log(`Region ${b} start.`)

        // Initialize arrays
        let arr1 = [];
        let arr2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let arr3 = [];

        // Find existed digits in region
        for (let c = 0; c < regs[b].length; c++) {
          if (main[regs[b][c]] !== '.') {
            arr1.push(main[regs[b][c]]);
          }
        }

        // Find available digits in region
        for (let d = 0; d < arr2.length; d++) {
          if (arr1.indexOf(arr2[d]) === -1) {
            arr3.push(arr2[d]);
          }
        }

        // Output available numbers in region
        console.log(`Numbers : ${arr3}`);
        
        // Check if each number can be applied in region
        for (let e = 0; e < arr3.length; e++) {
          console.log(`Number ${arr3[e]} start.`);

          // Initialize how many places
          let places = 0;

          // Count applicable places
          for (let f = 0; f < regs[b].length; f++) {
            console.log(`DEBUG : ${f}`);
            if (main[regs[b][f]] !== '.') {
              continue;
            } else {
              let flag = true;
              let tmp1 = findCurrenntRow(regs[b][f]);
              let tmp2 = findCurrenntCol(regs[b][f]);
              for (let g = 0; g < rows[tmp1].length; g++) {
                if (main[rows[tmp1][g]] === arr3[e]) {
                  flag = false;
                  break;
                }
              }
              for (let h = 0; h < cols[tmp2].length; h++) {
                if (main[cols[tmp2][h]] === arr3[e]) {
                  flag = false;
                  break;
                }
              }
              if (flag) {
                places++;
                console.log(`Number ${arr3[e]} places = ${places}`);
              }
            }
          }

          // Execute if only one place exists
          console.log(`DEBUG2 : ${places}`);
          console.log(`DEBUG3 : ${typeof(places)}`);
          if (places === 1) {
            console.log(`Before : ${main[regs[b][f]]}`);
            console.log(`After  : ${arr3[e]}`);
            main[regs[b][f]] = arr3[e];
          }
          
          console.log(`Number ${arr3[e]} end.`);
        }
        
        console.log(`Region ${b} end.`);
      }

      console.log(`Loop ${a} end.`);
    }
    
    console.log(main);
  }
}

module.exports = SudokuSolver;

