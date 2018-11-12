/**
 * ----------------------------------------------
 * 
 * In case of using reserve HOST and ROUTER_MODE = "hash"
 * Normal operation can be use as below
 * 
 * => const routes = [
 *    {path:"/",component:Hello}
 * ]
 * 
 * -----------------------------------------------
 * 
 * In case of not using reserve HOST.
 * To reduce length of path when writting url on path
 * We will define a base path
 * 
 * @const {string} basePath
 * 
 */
const basePath = '/vue/vue-router/public'

/** ---------------------- End Config ---------------------------- */

/** 
 * ----------------------------------------
 * Please add a route here
 * ----------------------------------------
 * 
 * Every time when adding a new route please specify "basePath" as a prefix
 * And every path name should begin with "/"
 * 
 * Example {path:basePath+'/pathname',component:Component}
 */

/** Import "COMPONENT" here */
import Hello from '../components/HelloWorld'
import About from '../components/About'

const routes = [
    { path: basePath + '/', component: Hello },
    { path: basePath + '/about', component: About }
]


/** -------------------- End File ------------------------ */
export default routes