/* eslint-disable no-shadow */

/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-param-reassign */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
class MountainArray {
  array = [];

  constructor(array) {
    this.array = [...array];
  }

  get(k) {
    return this.array[k];
  }

  length() {
    return this.array.length;
  }
}

/**
 * @param {number} target
 * @param {MountainArray  } mountainArr
 * @return {number}
 */
const findInMountainArray = (target, mountainArr) => {
  const length = mountainArr.length();
  let leftIdx = 0;
  let rightIdx = length - 1;
  while (leftIdx < rightIdx) {
    // eslint-disable-next-line no-bitwise
    const middle = (leftIdx + rightIdx) >> 1;
    if (mountainArr.get(middle) > mountainArr.get(middle + 1)) {
      rightIdx = middle;
    } else {
      leftIdx = middle + 1;
    }
  }
  /**
   * @param {*} leftIdx
   * @param {number} rightIdx
   * @param {number} k
   */
  const search = (leftIdx, rightIdx, k) => {
    while (leftIdx < rightIdx) {
      // eslint-disable-next-line no-bitwise
      const middle = (leftIdx + rightIdx) >> 1;
      if (k * mountainArr.get(middle) >= k * target) {
        rightIdx = middle;
      } else {
        leftIdx = middle + 1;
      }
    }
    return mountainArr.get(leftIdx) === target ? leftIdx : -1;
  };
  const ans = search(0, leftIdx, 1);
  return ans === -1 ? search(leftIdx + 1, length - 1, -1) : ans;
};

export { findInMountainArray, MountainArray };
