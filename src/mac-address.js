const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = false;
  if(n.split('-').length === 6 && n.length === 17) {
    const strN =n.split('-').join('');
    for(let i = 0; i <  strN.length; i++) {
      if((Number(strN[i]) <= 9 || Number(strN[i])>= 0) || (strN[i].charCodeAt(0) >= 65 && strN[i].charCodeAt(0) <= 70)) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  } 
  return result;
}; 
module.exports = {
  isMAC48Address
};
