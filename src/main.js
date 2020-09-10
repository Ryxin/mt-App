import Vue from 'vue'
import App from './App.vue';
import '@/axios.js';
import store from '@/store.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css'
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.directive('document-click', {
    bind(el, binding) {
        // console.log(el, binding, vNode);
        document.addEventListener('click', binding.value, false);
    },

})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')