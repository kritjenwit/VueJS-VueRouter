import config from '../../../app.config'

let basePath = config.BASE_PATH

export default {
    /**
     * 
     * For example 
     * 
     * addRoute("/home",HomeComponent)
     * 
     * @param {string} path Require "/" every time when url is written
     * @param {object} component
     * 
     */
    // function addRoute(path, component){
    //     return { path: '/vue/vue-router' + path, component: component }
    // }

    addRoute: (path,component)=> {
        return {
            path:basePath+path,
            component: component
        }
    }
}
