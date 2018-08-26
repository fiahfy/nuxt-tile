const Package = require('./package.json')

module.exports = {
  /*
  ** Headers of the page
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Mode
  */
  mode: 'spa',
  /*
  ** Source directory
  */
  srcDir: 'src',
  /*
  ** Modules
  */
  modules: [
    ['@nuxtjs/pwa', {
      manifest: {
        name: Package.productName,
        short_name: Package.productName
      }
    }],
    '@nuxtjs/vuetify'
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/vuex-persistedstate' }
  ]
}
