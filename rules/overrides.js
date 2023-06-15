module.exports = {
  rules: {
    // default rule disallows braces on single line arrow functions, not enough
    // value to this
    'arrow-body-style': 'off',
    'no-use-before-define': ['error', { functions: false, variables: false }],

    /* React Rules */

    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // makes reusable components unwieldy
    'react/jsx-props-no-spreading': 'off',

    // not needed for React 17+
    'react/react-in-jsx-scope': 'off',

    // fine for optional props to be undefined
    'react/require-default-props': 'off',

    // rule tailored more to web, TS handles this
    'react/style-prop-object': 'off',

    // hint should not always be used when label used
    'react-native-a11y/has-accessibility-hint': 'off',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-nested-ternary': 'off',
    'no-console': 'warn',
    'import/order': 'warn',
    'import/extensions': [
      'error',
      'never',
      {
        variables: 'always',
        hook: 'always',
        constants: 'always',
        helpers: 'always',
        types: 'always',
        gql: 'always',
        graphql: 'always',
        svg: 'always',
        json: 'always',
        png: 'always',
        gif: 'always',
        jpeg: 'always',
        jpg: 'always',
        eot: 'always',
        woff: 'always',
        woff2: 'always',
        otf: 'always',
      },
    ],
  },
};
