<template>
  <div class="home">
    <div class="homeScreen row">
       <div class="homeScreen__login col md-6 sm-12">
        <Login></Login>
      </div>
      <div class="homeSCreen__signup col md-6 sm-12">
        <Signup></Signup>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Login,
    Signup,
    Navbar,
  },
};
</script>
<style lang="stylus">
.home
  .homeScreen
    margin-top 50px
    border 1px solid green
    height 50vh
</style>
