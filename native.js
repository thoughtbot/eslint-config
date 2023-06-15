// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'plugin:react-native-a11y/all',
    require.resolve('./react-base'),
    './rules/native',
    './rules/overrides',
    './prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
