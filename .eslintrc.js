module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-expressions': 'error',
    'no-undef': 'error',
    'react/no-find-dom-node': 'warn',
  },
  globals: {
    __dirname: 'readonly',
    __REACT_DOM__: 'readonly',
    __STORYBOOK_TYPES__: 'readonly',
  },
}; 