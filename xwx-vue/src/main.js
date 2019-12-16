import Vue from 'vue'
import Toasted from 'vue-toasted'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import './style/global.css'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper/* { default global options } */)

// you can also pass options, check options reference below
Vue.use(Toasted, {
  position: 'top-center',
  duration: 3000
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
