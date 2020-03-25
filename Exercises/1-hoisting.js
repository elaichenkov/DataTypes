'use strict';

const fn = () => {
  // eslint-disable-next-line no-use-before-define
  console.log(value);
  // eslint-disable-next-line no-var
  var value = 4;

};

module.exports = { fn };
