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
  {
    name: '@eslint/js/recommended',
    ...js.configs.recommended,
  },
  {
    name: 'eslint-plugin-import/recommended',
    ...importPlugin.flatConfigs.recommended,
  },
  {
    name: '@thoughtbot/eslint-config/base',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...nodeRules.rules,
      ...styleRules.rules,
      ...variablesRules.rules,
      ...es6Rules.rules,
      ...importsRules.rules,
      ...strictRules.rules,
    },
  },
];
