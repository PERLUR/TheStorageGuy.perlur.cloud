<template>
  <div id="site-content">
    <div v-if="error.statusCode === 404">
      <h1 class="title is-1">404</h1>
      <h2 class="subtitle">Page not found!</h2>
    </div>
    <div v-else>
      <h1 class="title is-1">Unknown error</h1>
      <h2 class="subtitle">An error occurred!</h2>
    </div>
    <nuxt-link to="/">Back to main page!</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>