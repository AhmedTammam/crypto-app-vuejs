
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false

Vue.use(vueResource)


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
