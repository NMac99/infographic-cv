module.exports = {
  ignorePatterns: ['node_modules', '*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-function': 0,
    curly: 'error',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/display-name': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    'import/order': [
      1,
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: 'components/**',
            group: 'internal'
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always'
      }
    ],
    'padding-line-between-statements': [
      'error',
      // requires line break after multiline variables
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-let'],
        next: '*'
      },
      // requires line break after block statements
      {
        blankLine: 'always',
        prev: ['block', 'block-like'],
        next: '*'
      },
      // requires line break before block statements
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like']
      },
      // requires line break before return statement
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
