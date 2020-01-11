import Vue from 'vue'
import App from './App.vue'

// import {ContainerMixin, ElementMixin} from 'vue-slicksort'
// import slicksort from 'vue-slicksort'

// Not using an ES6 transpiler
Vue.config.productionTip = false

// Using an ES6 transpiler like Babel
// const ContainerMixin = slicksort.ContainerMixin;
// const ElementMixin = slicksort.ElementMixin;

new Vue({
  render: h => h(App),
}).$mount('#app')
