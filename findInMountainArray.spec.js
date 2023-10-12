import { describe, it } from 'mocha';
import assert from 'assert';
// eslint-disable-next-line import/extensions
import { findInMountainArray, MountainArray } from './findInMountainArray.js';

describe('[1, 2, 3, 4, 5, 3, 1], 3', () => {
  const array = [1, 2, 3, 4, 5, 3, 1];
  const input = new MountainArray(array);
  const target = 3;
  describe(`${array}`, () => {
    it('should return 2', () => {
      assert.equal(findInMountainArray(target, input), 2);
    });
  });
});

describe('[0,1,2,4,2,1], 3', () => {
  const array = [0, 1, 2, 4, 2, 1];
  const input = new MountainArray(array);
  const target = 3;
  describe(`${array}`, () => {
    it('should return -1', () => {
      assert.equal(findInMountainArray(target, input), -1);
    });
  });
});
