<template>
  <footer class="footer has-background-secondary">
    <div class="columns">
      <div class="column is-one-half">
        <h2 class="title has-text-centered has-text-white is-2">Partners</h2>
        <div class="columns is-variable is-8">
          <div class="column">
            <figure class="image">
              <a href="https://www.perlur.cloud/">
                <img class="logo" :src="PERLURLogoSquareWhiteSVG" />
              </a>
            </figure>
          </div>
          <div class="column">
            <figure class="image">
              <a href="https://www.2ndlayer.eu/">
                <img class="logo" :src="LayerLogoSquareWhiteSVG" />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <ul>
          <li><a href="/about-storage-guy/productivity-equipment/">Productivity Equipment</a></li>
          <li><a href="/about/storage-guy/sponsored-reviewes/">Sponsored Reviews</a></li>
        </ul>
      </div>
      <div class="column has-text-centered is-one-third">
        <p>
            2020 © <strong>The Storage Guy – <a href="https://www.perlur.cloud/">PERLUR Group</a></strong><br>
            All rights reserved.
        </p>
        <figure class="image">
          <img class="logo" :src="TheStorageGuyColorSVG" />
        </figure>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      PERLURLogoSquareWhiteSVG: require('~/assets/images/PERLUR_Group_Logo_White.svg'),
      LayerLogoSquareWhiteSVG: require('~/assets/images/2nd_Layer_Logo_Square_White.svg'),
      TheStorageGuyColorSVG: require('~/assets/images/The_Storage_Guy_No_Border_Transparent_Logo.svg')
    }
  }
};
</script>

<style>
footer.footer {
  padding-bottom: 1rem;
}
</style>