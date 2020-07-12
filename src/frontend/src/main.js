import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma/bulma.sass'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

const routes = [
  { path: '/', component: App }
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
