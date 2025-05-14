// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true



// Solution 1 - define start point of each 3x3 sub-box
var isValidSudoku = function(board) {
  // Validate Rows
  for (let i = 0; i < 9; i++) {
      let set = new Set();
      for (let j = 0; j < 9; j++) {
          let item = board[i][j];
          if (item !== '.' && set.has(item)) {
              return false;
          }
          set.add(item);
      }
  }

  // Validate Columns
  for (let i = 0; i < 9; i++) {
      let set = new Set();
      for (let j = 0; j < 9; j++) {
          let item = board[j][i];
          if (item !== '.' && set.has(item)) {
              return false;
          }
          set.add(item);
      }
  }

  // Validate 3x3 Sub-grids
  let starts = [[0, 0], [0, 3], [0, 6],
                [3, 0], [3, 3], [3, 6],
                [6, 0], [6, 3], [6, 6]];
  
  for (let [startRow, startCol] of starts) {
      let set = new Set();
      for (let row = startRow; row < startRow + 3; row++) {
          for (let col = startCol; col < startCol + 3; col++) {
              let item = board[row][col];
              if (item !== '.' && set.has(item)) {
                  return false;
              }
              set.add(item);
          }
      }
  }

  return true;
};



// Solution 2 
var isValidSudoku = function(board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if (board[r][c] === '.') {
              continue;
          }

          let value = board[r][c];
          let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

          if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
              return false;
          }

          rows[r].add(value);
          cols[c].add(value);
          boxes[boxIndex].add(value);
      }
  }

  return true;    
};


// similar expression
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};