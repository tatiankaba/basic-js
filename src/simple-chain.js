const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value === undefined ? '( )' : `( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      Math.floor(position) !== position
    ) {
      this.chain = [];
      throw new Error('Invalid position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
