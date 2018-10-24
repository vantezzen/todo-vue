import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css';

Vue.config.productionTip = false

Vue.use(Bootstrap);
Vue.use(FontAwesome);

new Vue({
  render: h => h(App)
}).$mount('#app')
