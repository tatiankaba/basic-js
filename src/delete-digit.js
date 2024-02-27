const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberArray = n.toString().split('');
  let maxNumber = Number(numberArray[0]);
  let removed;
  let remindedNumber;
  for(let i = 0; i < numberArray.length; i++) {
    removed = Number(numberArray.splice(i, 1)); 
    remindedNumber = Number(numberArray.join(''));
    console.log(remindedNumber)
    if(removed > maxNumber) {
      maxNumber = removed;
    } else if (remindedNumber > maxNumber) {
      maxNumber = remindedNumber;
    }
    numberArray = n.toString().split('');

  }
  return maxNumber;
  }


module.exports = {
  deleteDigit
};
