const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns same input string if column is greater than or equal to string length', () => {
    expect(wrap("hi", 15)).to.equal("hi");
  });

  it('Breaks to new line if input string length is greater than input column', () => {
    expect(wrap("hello how ", 5)).to.equal("hello\n how ");
  });

});


