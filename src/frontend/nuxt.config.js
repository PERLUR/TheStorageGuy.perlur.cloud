export default {
    target: 'static', // default: 'server'
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