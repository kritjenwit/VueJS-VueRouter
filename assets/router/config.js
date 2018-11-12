/**
 * --------------------------------------------
 * 
 * Vue Router Config
 * 
 * Author: Jenwit Suwech
 * Version: 1.0.0
 * 
 * ---------------------------------------------
 * 
 * Import Vue and Vue Router
 * 
 * in Version: 1.0.0
 * Vue and Vue-router are stored in .js file
 * 
 */

import Vue from '../src/js/vue'
import VueRouter from '../src/js/vue-router'

Vue.use(VueRouter)

/** Import app.config.js */
import config from '../../app.config'

/** Import router.js */
import router from './router'


export default new VueRouter({
    mode: config.ROUTER_MODE,
    routes: router
})