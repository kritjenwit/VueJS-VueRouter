import config from '../../app.config'

/**
 * -------------
 * Base Path 
 * -------------
 * 
 * 
 * Base path is written in app.config.js
 * To edit base path please go to app.config.js
 * 
 * -------------------------------------------
 */
let basePath;
if(config.ROUTER_MODE === 'history')
    basePath = config.ROUTER_MODE   
else
    basePath = ''

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