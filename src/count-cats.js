const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  count = 0;
  
  matrix.forEach( (arrayUnit) => {
    arrayUnit.forEach((item) => {
      if(item === '^^') {
        count += 1;
      }
    })
  })
  return count;
}

module.exports = {
  countCats
};
