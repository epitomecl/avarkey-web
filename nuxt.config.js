const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware: [
    // <project root>/api/index.js 모듈을 미들웨어로 추가
    '~/server/index.js',
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto'    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Axios module configuration
  */
  axios: {       
    credentials: true,    
  },

  // axios: {
  //   baseURL: 'http://13.209.194.1:3000/',
  //   proxyHeaders: false,
  //   credentials: false
  // },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/util/getContract', '~/util/getWeb3', '~/util/pollWeb3'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]    
  }
}
