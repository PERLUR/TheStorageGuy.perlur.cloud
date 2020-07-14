export default {
  target: 'static', // default: 'server'
  components: true,
  css: [
    '~assets/scss/main.scss'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/sitemap',
    '@nuxt/components',
    ['@nuxtjs/google-analytics', {
      id: 'UA-113467444-3'
    }]
  ],
  sitemap: {
    hostname: 'https://thestorageguy.2ndlayer.eu',
    gzip: true,
  },
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
              {
                buildTarget: isServer ? 'server' : 'client',
                corejs: { version: 3 }
              }
          ]
        ]
      }
    }
  }
}
