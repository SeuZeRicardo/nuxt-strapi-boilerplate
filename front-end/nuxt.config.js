export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-nuxt-strapi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://strapi.nuxtjs.org/ - https://strapi.io/documentation/developer-docs/latest/getting-started/nuxt-js.html
    '@nuxtjs/strapi',
  ],
  strapi: {
    entities: ['restaurants', 'categories'],
    url: 'http://localhost:1337',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
