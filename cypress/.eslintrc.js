module.exports = {
  "plugins": [
    "cypress",
    "chai-friendly"
  ],
  "extends": [
    "plugin:cypress/recommended"
  ],
  "env": {
        "cypress/globals": true
  },
  "rules": {
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "prefer-arrow-callback": 0,
        "semi": 0,
        "func-names": 0
    }
}
