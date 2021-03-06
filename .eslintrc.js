var path = require('path')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'plugin:promise/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id']
        },
        allowChildren: false
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        depth: 1
      }
    ],
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    camelcase: 0,
    curly: ['error', 'all'],
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/style-prop-object': 0,
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-cond-assign': ['error', 'except-parens'],
    'no-confusing-arrow': 'error',
    'no-mixed-operators': 'error',
    'no-new': 0,
    'no-tabs': 'error',
    'compat/compat': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    'prefer-promise-reject-errors': 0,
    'no-param-reassign': [2, { props: false }]
  },
  plugins: ['flowtype', 'import', 'json', 'markdown', 'prettier', 'promise', 'compat', 'react'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['app', 'node_modules', 'app/node_modules']
      },
      webpack: {
        config: path.resolve(__dirname, 'internals', 'webpack', 'webpack.config.eslint.js')
      }
    }
  }
}
