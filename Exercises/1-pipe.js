'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw 'At least one input is not function type';
    }
  }
  return x => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
