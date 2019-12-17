import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs';
import 'github-markdown-css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')