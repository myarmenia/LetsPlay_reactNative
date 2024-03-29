module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    camelcase: 0,
    'func-names': 'off',
    'import/no-cycle': 'off',
    'import/order': 'off',
    'no-console': 'off',
    'no-extend-native': 'off',
    'no-extra-boolean-cast': 'off', // we use Boolean(array.length)
    'no-nested-ternary': 'off',
    'no-plusplus': 'off', // for loops use this
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
  },
}
