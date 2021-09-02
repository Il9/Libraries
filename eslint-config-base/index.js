module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    // Prettier
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        singleQuote: true,
        quoteProps: "consistent",
        arrowParens: "avoid"
      }
    ],

    // Import
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "import/newline-after-import": "error"
  }
};
