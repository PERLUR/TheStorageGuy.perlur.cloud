<template>
  <footer class="footer has-background-secondary">
    <div class="columns">
      <div class="column is-one-half">
        <h2 class="title has-text-centered has-text-white is-2">Partners</h2>
        <div class="columns is-variable is-8">
          <div class="column">
            <figure class="image">
              <img class="logo" :src="PERLURLogoSquareWhiteSVG" />
            </figure>
          </div>
          <div class="column">
            <figure class="image">
              <img class="logo" :src="LayerLogoSquareWhiteSVG" />
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
      PERLURLogoSquareWhiteSVG: require('~/assets/2nd_Layer_Logo_Square_White.svg'), // Replace with real PERLUR logo
      LayerLogoSquareWhiteSVG: require('~/assets/2nd_Layer_Logo_Square_White.svg')
    }
  }
};
</script>

<style>
footer.footer {
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>