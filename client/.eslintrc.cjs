module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  "plugins": [
    "node"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2021
  },
  "rules": {
    "no-undef": "off"
  }
}

