export default {
  target: 'static', // default: 'server'
  components: true,
  css: [
    '~assets/scss/main.scss'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxt/components',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-113467444-3'
    }]
  ],
  sitemap: {
    hostname: 'https://thestorageguy.perlur.cloud',
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
