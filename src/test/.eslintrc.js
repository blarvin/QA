module.exports = {
  plugins: ["cypress", "chai-friendly"],
  env: {
    "cypress/globals": true
  },
  rules: {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "prefer-arrow-callback": 0,
    "import/no-extraneous-dependencies": 0,
    semi: 0,
    "func-names": 0,
    "prefer-destructuring": 0
  },
  extends: ["plugin:cypress/recommended", "prettier", "prettier/react"]
};
