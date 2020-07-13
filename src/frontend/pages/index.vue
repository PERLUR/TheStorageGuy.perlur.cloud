<template>
  <div id="app">
    <header>
        <nav class="navbar is-spaced" role="navigation" aria-label="dropdown main navigation">
          <div class="navbar-brand">
            <img class="navbar-item logo" :src="TheStorageGuyLogoSVG" />
          </div>
          <div class="navbar-end">
            <div class="navbar-end">
              <span><a class="navbar-item is-hoverable title is-4" href="/overview/">Overview</a></span>
              <span><a class="navbar-item is-hoverable title is-4" href="/about-storage-guy/">About Storage Guy</a></span>
              <a class="navbar-item" href="https://www.facebook.com/2ndlayer.eu/">
                <i class="fab fa-facebook-square title"></i>
              </a>
              <a class="navbar-item" href="https://www.linkedin.com/company/2ndlayer/">
                <i class="fab fa-linkedin title"></i>
              </a>
              <a class="navbar-item" href="https://github.com/2nd-Layer">
                <i class="fab fa-github-square title"></i>
              </a>
              <a class="navbar-item" href="https://www.youtube.com/channel/UCp-grc_OkwssH4XcSU7Lo/">
                <i class="fab fa-youtube-square title"></i>
              </a>
            </div>
          </div>
        </nav>
    </header>
    <div id="site-content">
    </div>
    <footer class="footer has-background-secondary">
      <div class="columns">
        <div class="column is-one-half">
        </div>
        <div class="column has-text-centered is-one-third">
          <p>
              2020 © <strong>The Storage Guy - PERLUR Group</strong><br>
              All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      TheStorageGuyLogoSVG: require('~/assets/The_Storage_Guy_Website_Logo.svg')
    }
  }
};
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
  color: #2c3e50;
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
</style>
