module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
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
