/**
 * 
 * For example 
 * 
 * addRoute("/home",HomeComponent)
 * 
 * @param {string} path Require "/" every time when url is written
 * @param {string} component
 * 
 */
function addRoute(path,component){
    return { path:'/vue/vue-router'+path,component:component}
}


