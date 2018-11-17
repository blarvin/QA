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
        "chai-friendly/no-unused-expressions": 2
    }
}
