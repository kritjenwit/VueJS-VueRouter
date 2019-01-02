export default {
    /**
     * --------------------------------------
     * Router Mode
     * --------------------------------------
     * 
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
    ROUTER_MODE: "history",


    /**
     * -------------
     * Base Path
     * -------------
     * 
     * 
     * To reduce the length of path writing in route, base path is used
     * If ROUTER_MODE is selected as "hash" mode, BASE_PATH is no need to specified 
     */
    BASE_PATH: '/vue/vue-router/public'
}


