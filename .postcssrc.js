// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-bem-fix": {
      shortcuts: {
        'component-namespace': 'n',
        'component': 'b',
        'descendent': 'e',
        'modifier': 'm',
        'when' : 'when',
        'utility': 'u'
      }
    },
    "precss": {},
    "postcss-calc": {},
    "postcss-utilities": {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-px2rem-more": {
      remUnit: 10,
      keepFontSize: false,
      exclude: /node_modules/i
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
  }
}
