<template>
  <footer class="footer has-background-secondary">
    <div class="columns">
      <div class="column is-one-half">
        <h2 class="title has-text-white is-2">Partners</h2>
        <div class="columns is-variable is-8">
          <div class="column">
            <figure class="image">
              <img class="logo" :src="LayerLogoSquareWhiteSVG" />
            </figure>
          </div>
          <div class="column">
            <figure class="image">
              <img class="logo" :src="PERLURLogoSquareWhiteSVG" />
            </figure>
          </div>
        </div>
      </div>
      <div class="column"></div>
      <div class="column has-text-centered is-one-third">
        <p>
            2020 © <strong>The Storage Guy - PERLUR Group</strong><br>
            All rights reserved.
        </p>
      </div>
    </div>
  </footer>
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
footer.footer {
  padding-bottom: 1rem;
}
</style>