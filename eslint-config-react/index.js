module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-hooks"],
  extends: ["@il9/eslint-config-base"],
  rules: {}
};
