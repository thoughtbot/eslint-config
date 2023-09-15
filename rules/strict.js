// these rules are based on the thoughtful work from the Airbnb team, with overrides
// of the Airbnb rules added at the end
// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

module.exports = {
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
};
