// 包支持
// "stylelint": "^13.13.1",
// "stylelint-config-property-sort-order-smacss": "^7.1.0",
// "stylelint-config-recommended": "^5.0.0",
// "stylelint-config-standard": "^22.0.0",
// "stylelint-scss": "^3.21.0",

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'indentation': 2,
    'color-no-invalid-hex': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
    'property-case': null,
    'property-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
  }
}