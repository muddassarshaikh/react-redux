module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: false,
        singleQuote: true,
        useTabs: false,
      },
    ],
  },
};
