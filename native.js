// import reactNativeA11yPlugin from 'eslint-plugin-react-native-a11y';
import reactBase from './react-base.js';
import { native } from './rules/index.js';
import prettier from './prettier.js';

export default [
  ...reactBase,
  // TODO: Re-enable when eslint-plugin-react-native-a11y is added back
  // ...reactNativeA11yPlugin.configs['all'],
  native,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...prettier,
];
