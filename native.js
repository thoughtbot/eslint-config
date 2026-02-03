module.exports = {
  extends: [
    'plugin:react-native-a11y/all',
    require.resolve('./react-base'),
    './rules/native',
    './prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
