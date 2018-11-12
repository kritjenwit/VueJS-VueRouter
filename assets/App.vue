<template>
    <div id="navigator">
       <nav>
           <router-link to="/vue/vue-router/public/">Home</router-link>
           <router-link to="/vue/vue-router/public/about">About</router-link>
       </nav>
       <div id="stage">
           <router-view></router-view>
       </div>
    </div>

</template>

<script>

import Hello from './components/HelloWorld'

export default {
  components: {Hello}
};
</script>

<style></style>
