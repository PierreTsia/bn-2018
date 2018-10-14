<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions({ setTodosRef: "setTodosRef" }),
  },
};
</script>


<style lang='stylus'>
@import "./style/index.styl"

#app 
  font-family: "Neucha", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

body
  background rgba($app-blue 0.2)

.text-center
  text-align center


</style>
