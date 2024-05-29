/* eslint-env node */

require('@rushstack/eslint-patch/modern-module-resolution');
const path = require('path');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    // prettier https://prettier.io/docs/en/options.html
    // eslint http://eslint.cn/docs/rules/
    'no-debugger': 'error',
    'no-console': 'error',
    eqeqeq: ['error', 'always'],

    // prettier https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'always',
        semi: true,
        trailingComma: 'all',
      },
    ],

    // vue
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-reserved-component-names': 'off',

    // typescript https://typescript-eslint.io/rules/
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',

    // import https://github.com/import-js/eslint-plugin-import#rules
    'import/no-useless-path-segments': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['type'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '@application/**',
            group: 'internal',
          },
          {
            pattern: '@index/**',
            group: 'internal',
          },
          {
            pattern: '@portal/**',
            group: 'internal',
          },
          {
            pattern: '@login/**',
            group: 'internal',
          },
          {
            pattern: '@supervision/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'import/newline-after-import': 'error',
  },

  plugins: [
    // https://github.com/import-js/eslint-import-resolver-typescript#configuration
    'import',
  ],

  settings: {
    // https://github.com/import-js/eslint-import-resolver-typescript#configuration
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },

  overrides: [
    {
      files: ['src/**/__tests__/*', 'src/**/*.spec.*'],
      rules: {
        'no-debugger': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
