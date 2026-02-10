// base used for both React web and React Native
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jestPlugin from 'eslint-plugin-jest';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import baseConfig from './base.js';
import { reactRules, reactHooksRules } from './rules/index.js';

export default [
  ...baseConfig,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      jest: jestPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...pluginJest.environments.globals.globals,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.flat.recommended,
  jestPlugin.configs['flat/recommended'],
  reactRules,
  reactHooksRules,
  {
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    ...testingLibraryPlugin.configs['flat/react'],
  },
];
