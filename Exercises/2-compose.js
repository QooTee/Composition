'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = x => {
    let res = x;
    let i = fns.length - 1;
    try {
      for (i; i > -1; i--) {
        res = fns[i](res);
      }
    } catch (err) {
      for (const handler of handlers) {
        handler(err);
        return undefined;
      }
    }
    return res;
  };
  composed.on = (type, handler) => {
    if (type === 'error') handlers.push(handler);

  };
  return composed;
};

module.exports = { compose };
