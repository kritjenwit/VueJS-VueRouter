<template>
    <div id="navigator">
       <nav>
           <!-- 
                In case of using HASH mode.
                Please do not specify a full path.
                
                Please use below 

                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
            -->
           <router-link to="/vue/vue-router/public/">Home</router-link>
           <router-link to="/vue/vue-router/public/about">About</router-link>
       </nav>
       <div id="stage">
           <router-view></router-view>
       </div>
    </div>

</template>

<script>
import Hello from "./components/HelloWorld";

export default {
  components: { Hello }
};
</script>

