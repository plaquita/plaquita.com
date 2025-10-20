const webpack = require('webpack');
const webVitalHelpers = require('web-vitals-help');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add process polyfill
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
        })
      );

      // Add fallbacks for Node.js modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        process: require.resolve('process/browser.js'),
      };

      // Add web-vitals-helpers plugin
      webpackConfig.plugins.push(webVitalHelpers);

      return webpackConfig;
    },
  },
};
