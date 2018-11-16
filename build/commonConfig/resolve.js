const resolve = require('../utils/resolve')

const resolveConfig = {
  extensions: ['.js', '.vue', '.json', '.jsx', '.styl'],
  alias: {
    'vue': 'vue/dist/vue.runtime.min.js',
    '@': resolve('src'),
    'pages': resolve('src/pages'),
    'api': resolve('src/api'),
    'mock': resolve('src/mock'),
    'components': resolve('src/components'),
    'base-components': resolve('src/base-components'),
    'shared': resolve('src/shared'),
    'styles': resolve('src/assets/styles'),
    'images': resolve('src/assets/images'),
    'libs': resolve('src/libs')
  }
}

module.exports = resolveConfig
