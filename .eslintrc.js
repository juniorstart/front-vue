module.exports = {
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',

  ],
  rules: {
    // override/add rules settings here, such as:
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/*.spec.js",
        "**/*.config.js"
      ],
      env: {
        jest: true
      }
    }
  ],
}