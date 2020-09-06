module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: 'standard',
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 1,
    'no-undef': 1,
    'comma-dangle': 'warn'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      js: true
    }
  }
}
