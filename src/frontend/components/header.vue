<template>
  <header>
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="navbar-item logo" :src="TheStorageGuyLogoSVG" />
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <span><a class="navbar-item is-hoverable title is-4" href="/">Overview</a></span>
          <span><a class="navbar-item is-hoverable title is-4" href="/about-storage-guy/">About Storage Guy</a></span>
          <a class="navbar-item" href="https://twitter.com/LiberalMark">
          <i class="fab fa-twitter-square title"></i>
          </a>
          <a class="navbar-item" href="https://www.youtube.com/channel/UCp-grc_OkwssH4XcSU7Lo/">
          <i class="fab fa-youtube-square title"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      TheStorageGuyLogoSVG: require('~/assets/images/The_Storage_Guy_Website_Logo.svg')
    }
  }
};
</script>

<style>
.navbar {
  padding-bottom: 0px;
}

.navbar-item.logo {
  max-width: 20vw;
  padding: 0px;
}
</style>