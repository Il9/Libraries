module.exports = {
  env: {
    node: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        singleQuote: true,
        quoteProps: "consistent",
        arrowParens: "avoid"
      }
    ]
  }
};
