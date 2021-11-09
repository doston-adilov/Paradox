export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paradox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'author', content: 'Doston Adilov' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://images.squarespace-cdn.com/content/v1/555e1a9fe4b02db454a79ed9/1436898018823-7ZGIOKK8XXMOXJGCDVRN/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
