export default {
  target: 'static', // default: 'server'
  css: [
    '~assets/scss/main.scss'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/sitemap'
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
