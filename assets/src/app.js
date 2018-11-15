/** Import Instance */
import Vue from 'vue'
import router from '../router/config'

/** Import Component */
import App from '../App'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
