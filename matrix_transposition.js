const transpose = function(matrix) {
return matrix[0].map((col, index) => matrix.map((row)=> row[index]))

};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],// matrix[0] = row,
  [1, 2, 3, 4],// matrix[1] = row,
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));



/* 
const typeWriter = (string) => {
  let interval = 50;

  for (let letter of string) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, interval);
    interval += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, interval);
  
 */
