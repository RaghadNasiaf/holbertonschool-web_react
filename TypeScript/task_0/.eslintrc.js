module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/extensions': ['error', 'always', {
      ts: 'never',
      js: 'never',
    }],
    'no-console': 'off',
  },
};
