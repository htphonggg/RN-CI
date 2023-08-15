module.exports = {
  root: true,
  env: {
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'react-hooks',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: []
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    semi: ['error', 'never'],
    'react-native/no-inline-styles': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-empty': 'warn',
    'react/no-children-prop': 'off'
  }
}
