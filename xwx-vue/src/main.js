import Vue from 'vue'
import Vuex from 'vuex'
import Toasted from 'vue-toasted'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './style/global.css'
import store from './store'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(ElementUI)

Vue.use(Vuex)

// you can also pass options, check options reference below
Vue.use(Toasted, {
  position: 'top-center',
  duration: 3000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
