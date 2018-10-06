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


<style lang='stylus'>
$app-blue = #B8E6FF
#app 
  font-family: "Neucha", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

body
  background rgba($app-blue 0.2)


</style>
