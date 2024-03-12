module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-use-react': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': 'off',
    'space-before-function-paren': 'off'
  }
}
