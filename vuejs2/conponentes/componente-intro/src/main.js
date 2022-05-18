import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

Vue.config.productionTip = false;

Vue.component('app-contadores', Contadores)

createApp(App).mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import Contador from './Contador.vue'

// Vue.config.productionTip = false
// Vue.component('app-contador', Contador)

// new Vue({
//     render: h => h(App),
// }).$mount('#app')