<template>
  <div>
    <div id="navigation">
      <!-- <router-link to=""></router-link> -->
      <router-link :to="basePath+'/'">Home</router-link>
      <router-link :to="basePath+'/about'">About</router-link>
    </div>
    <div id="stage">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from "./components/HelloWorld";
import config from '../app.config'

export default {
  components: { Hello },
  data(){
    return {
      basePath: config.BASE_PATH
    }
  },
  method: {

  },
  mounted(){
  
  }
};
</script>

