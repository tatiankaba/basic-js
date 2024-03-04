const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let result = 0;

  if(matrix.length < 2) {
    matrix[0].forEach((el) => {
      result += el;
    });
    return result;
  }

  matrix[0].forEach((el) => {
    result += el;
  });

  for(let i = 1; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] > 0 && matrix[i-1][j] > 0 ) {
        result += matrix[i][j];
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
