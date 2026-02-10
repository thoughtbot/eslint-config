// import reactNativeA11yPlugin from 'eslint-plugin-react-native-a11y';
import reactBaseConfig from './react-base.js';
import { nativeRules } from './rules/index.js';
import prettierConfig from './prettier.js';

export default [
  ...reactBaseConfig,
  // TODO: Re-enable when eslint-plugin-react-native-a11y is added back
  // ...reactNativeA11yPlugin.configs['all'],
  nativeRules,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...prettierConfig,
];
