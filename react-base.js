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
  {
    name: 'eslint-plugin-jsx-a11y/recommended',
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    name: '@thoughtbot/eslint-config/react-base',
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
        ...jestPlugin.environments.globals.globals,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRules.rules,
      ...reactHooksRules.rules,
    },
  },

  {
    name: 'eslint-react/recomended',
    ...reactPlugin.configs.flat.recommended,
  },
  {
    name: 'eslint-react/jsx-runtime',
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  {
    name: 'eslint-plugin-react-hooks/recomended',
    ...reactHooksPlugin.configs.flat.recommended,
  },
  {
    name: 'eslint-plugin-jest/recommended',
    ...jestPlugin.configs['flat/recommended'],
  },
  {
    name: '@thoughtbot/eslint-config/react-base/base/testing',
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    ...testingLibraryPlugin.configs['flat/react'],
  },
];
