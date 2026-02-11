import reactBaseConfig from './react-base.js';
import prettierConfig from './prettier.js';

export default [
  ...reactBaseConfig,
  ...prettierConfig,
  { name: '@thoughtbot/eslint-config/react' },
];
