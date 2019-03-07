<template>
  <div id="app">
    
    <headerbox></headerbox>

    <router-view/>
    
    <Loading></Loading>

    <totop></totop>

  </div>
</template>

<script>
import Loading from "@/components/Loading";
import headerbox from "@/components/header-box";
import totop from "@/components/scollToTop";

export default {
  name: 'App',
  components:{Loading,headerbox,totop},
  created(){

    // 页面加载，读取localStorage token重新存入vuex
    this.$store.commit("update_token",localStorage["token"]);

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>