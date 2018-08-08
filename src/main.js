
import Vue from 'vue'
import vueResource from 'vue-resource'
import vueCustomElement from 'vue-custom-element'
import App from './App'

Vue.config.productionTip = false

Vue.use(vueResource, vueCustomElement)


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
