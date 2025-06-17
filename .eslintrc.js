module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'unused-imports',
    '@typescript-eslint',
    'prettier',
    'jest',
    'import',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 2,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [['builtin', 'external'], 'internal', ['sibling', 'parent']],
        'pathGroups': [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@organic/**',
            group: 'internal',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'eqeqeq': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
