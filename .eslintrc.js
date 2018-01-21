module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'import'
  ],
  globals: {
    'cordova': true,
    'DEV': true,
    'PROD': true,
    '__THEME': true
  },
  // add your custom rules here
  'rules': {

    'arrow-parens'               : 0,
    'comma-spacing'              : 0,
    'generator-star-spacing'     : 0,
    'indent'                     : 0,
    'key-spacing'                : 0,
    'keyword-spacing'            : 0,
    'no-mixed-spaces-and-tabs'   : 0,
    'no-multi-spaces'            : 0,
    'no-multiple-empty-lines'    : 0,
    'no-tabs'                    : 0,
    'no-trailing-spaces'         : 0,
    'no-undef'                   : 0,
    'no-undef'                   : 0,
    'padded-blocks'              : 0,
    'quotes'                     : 0,
    'semi'                       : 0,
    'space-before-blocks'        : 0,
    'space-before-function-paren': 0,
    'space-in-parens'            : 0,
    'space-infix-ops'            : 0,
    'spaced-comment'             : 0,
    'new-cap'                    : 0,
    'curly'                      : 0,
    'comma-dangle'               : 0,
    'no-unreachable'             : 0,
    'eol-last'                   : 0,
    'arrow-spacing'              : 0,

    // allow paren-less arrow functions
    'one-var': 0,
    'import/first': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/export': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }]
  }
}
