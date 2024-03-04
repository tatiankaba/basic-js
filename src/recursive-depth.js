const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let count = 0;
    let temp = 0;

    if(typeof arr === 'object') {
      count = 1;
    }

    arr.forEach(element => {
        if(typeof element === 'object') {
          temp =  1 + this.calculateDepth(element);
          if(temp > count) {
            count = temp;
          }
        }
    });
 

   return count;
}
}
module.exports = {
  DepthCalculator
};
