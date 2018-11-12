/** Import Instance */
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from '../router/config'

/** Import Component */
import App from '../App'

Vue.use(Vuetify)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
