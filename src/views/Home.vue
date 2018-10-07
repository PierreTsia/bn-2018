<template>
  <div class="home">

       <div class="homeScreen">
         <div v-if="!userIsAuth" class="homeScreen__loginAndSignup">

       
          <div v-if="isActive('login')" class="homeScreen__login">
            <Login>
              <div class="homeScreen__toggleLinks" slot="link">
                <span>Don't have an account yet ?</span>
                <span @click="setActiveComponent('signup')" class="toggleLink"> Go to Sign-Up page</span>
              </div>
            </Login>
          </div>

          <div v-if="isActive('signup')" class="homeScreen__signup">
            <Signup>
              <div class="homeScreen__toggleLinks" slot="signuplink">
                <span>Already have an account ?</span>
                <span @click="setActiveComponent('login')" class="toggleLink"> Go to Login page</span>
              </div>
            </Signup>
          </div> 
        </div>
        <div v-else>
          POUET
        </div>

        



      </div>

    
    
   
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Navbar from "@/components/Navbar.vue";

import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Login,
    Signup,
    Navbar,
  },
  data() {
    return {
      activeComponent: "login",
    };
  },
  methods: {
    isActive(component) {
      return component === this.activeComponent;
    },
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
  computed: {
    ...mapGetters({ currentUser: "currentUser" }),
    userIsAuth() {
      return this.currentUser;
    },
  },
  watch: {
    currentUser: {
      immediate: true,
      handler(user) {
        if (user) {
          console.log("loggedIn as", user.email);
        } else if (!user) {
          console.log("no user");
        }
      },
    },
  },
};
</script>
<style lang="stylus">
@import "../style/index.styl"

.home
  margin-top 75px
  min-height calc(100vh - 75px)
  display flex
  flex-direction column
  justify-content center
  align-items center
  .homeScreen
    height 50vh
    width 100%
    max-width 900px
    .homeScreen__login, .homeScreen__signup
      width 90%
      margin auto
      .homeScreen__toggleLinks
        margin-top 10px
        color $app-darkblue
        display block
        width 100%
        padding 20px
        .toggleLink
          display block
          box-sizing border-box
          font-size 25px
          padding 5px
          color $app-grey
          cursor pointer 
          &:hover
            color $app-salmon
   
    
</style>
