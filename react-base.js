// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

// base used for both React web and React Native
module.exports = {
  env: { jest: true },
  extends: [
    require.resolve('./base'),
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    './rules/react',
    './rules/react-hooks',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  plugins: ['react', 'react-hooks', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
