<template>
  <nuxt/>
</template>

<script>
export default {
  head () {
    return {
      title: 'The Storage Guy',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css'
        }
      ]
    }
  }
}
</script>

<style>
#site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.navbar {
  padding-bottom: 0px;
}

.navbar-item.logo {
  max-width: 20vw;
  padding: 0px;
}

#site-content {
  padding: 1rem 2rem;
  flex: auto;
}

footer.footer {
  padding-bottom: 1rem;
}
</style>