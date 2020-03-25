'use strict';

const countTypesInArray = arr => {
  const result = {};

  for (const item of arr) {
    const type = typeof item;
    const count = result[type] || 0;

    result[type] = count + 1;
  }

  return result;
};

module.exports = { countTypesInArray };
