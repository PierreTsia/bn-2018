<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>


<style>
#app {
  font-family: "Neucha", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  height: 75px;
}
</style>
