require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    './rules/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint'],

  settings: {
    'import/resolver': {
      typescript: {}, // load tsconfig.json
    },
  },
};
