<template>
  <div id="site-content">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
      </svg>
    </div>
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