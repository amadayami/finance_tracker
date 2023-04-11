const sassRule = webpackConfig.module.rules.find(rule => rule.test.test('.sass') || rule.test.test('.scss'))
const sassLoader = sassRule.use.find(use => use.options?.sassOptions)
const sassOptions = sassLoader.options.sassOptions
sassOptions.quietDeps = true

const { webpackConfig, merge } = require('shakapacker')

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.

const customConfig = {
	// We'll put stuff in here later, such as `plugins: [ … ]` or `resolve: { … }`
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],

  resolve: {
    extensions: ['.css']
  }
}

module.exports = merge(webpackConfig, customConfig)