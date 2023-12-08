import { expect } from '@open-wc/testing';

import { squared } from './index.js';

describe('squared', () => {
  it('can compute square of two numbers', () => {
    expect(squared(2)).to.equal(4);
    expect(squared(12)).to.equal(144);
  });
});
