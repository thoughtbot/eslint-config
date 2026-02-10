import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import {
  bestPracticesRules,
  errorsRules,
  es6Rules,
  importsRules,
  nodeRules,
  strictRules,
  styleRules,
  variablesRules,
} from './rules/index.js';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  bestPracticesRules,
  errorsRules,
  nodeRules,
  styleRules,
  variablesRules,
  es6Rules,
  importsRules,
  strictRules,
];
