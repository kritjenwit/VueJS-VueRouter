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

/**
 * Import router.js
 */

import router from './router'

/**
 * 
 * Set default vue router mode as "HISTORY" mode
 * By the way DEFAULT mode by Vue Router is "HASH" mode
 * 
 *  @const {string}
 * 
 * 
 * --------------------------------------------------------------
 * TO let vue router mode be "HASH" moded please use the code below
 * 
 * => const ROUTER_MODE = "hash"
 * 
 * ---------------------------------------------------------------
 */ 
const ROUTER_MODE = "history"



export default new VueRouter({
    mode: ROUTER_MODE,
    routes: router
})