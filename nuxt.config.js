/* eslint-disable no-dupe-keys */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-shop',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/tailwind.css","element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/ElementUI.js',
    { src: "~plugins/axios.js", ssr: true }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { 
    proxy: true,
    credential: true,
    withCredentials: true
  },
  proxy: {
    '/api': {
      target: 'http://beta.ptcgvip.com', 
      pathRewrite: {changeOrigin: true, // 是否跨域
      '^/api': '',
      }
    },},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {vendor:['element-ui,axios'] },
  watchQuery: ['params'],
  router: {
    extendRoutes(routes) {
      routes.push({
        path: '/',
        redirect: '/splist'
      })
    }
  }

}
