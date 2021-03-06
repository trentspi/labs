module.exports = {
  "parser" : "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-danger": 0,
    "arrow-body-style": 0,
    "no-underscore-dangle": 0,
    "no-restricted-syntax": 0,
    "no-mixed-operators": 0,
    "no-bitwise": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/label-has-for": 0,
  }
};
