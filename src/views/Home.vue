<template>
  <div class="home">
    <div class="container">
       <div class="homeScreen row border">
          <div class="homeScreen__login col md-6 sm-12">
            <Login></Login>
          </div>
          <div class="homeScreen__signup col md-6 sm-12">
            <Signup></Signup>
          </div>
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
  margin-top 75px
  min-height calc(100vh - 75px)
  display flex
  flex-direction column
  justify-content center
  align-items center
  .container
    max-width 1200px
   
  .homeScreen
    height 50vh
    width 100%
    background white
    
    
</style>
