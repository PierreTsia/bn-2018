<template>
  <div class="login border">
      <div class="login__header">
        <span class="title">Login</span>
        <p>You can log in with one of your usual account</p>
      </div>

      <div class="login__content">
        <div class="login__content--socials">
            <button @click="handleSocialProviderClick('google')" class="col-3 btn btn-danger">
              Google<IconGoogle class="icon-normal icon-default icon-white"/>
            </button>

            <button @click="handleSocialProviderClick('facebook')" class="col-3 btn btn-secondary">
              Facebook <IconFacebook class="icon icon-normal icon-inform"/>
            </button>

            <button @click="handleSocialProviderClick('github')" class="col-3 btn btn-primary">
              Github <IconGithub class="icon icon-normal icon-default icon-white"/>
            </button>
        </div>


        <div class="login__content--separator">
          <span>
              ...or use your email and password
          </span>
        </div>

        <div class="login__content--email">
            <div class="form-group row container">
              <div class="col md-5 sm-12">
                <BaseInput ref="login_email" :label="'Email'" :placeholder="'john@doe.com'" :type="'email'"/>
              </div>
              <div class="col md-5 sm-12">
                <BaseInput ref="login_password" :label="'Password'" :placeholder="'password'" :type="'password'"/>
              </div>
            </div>
        </div>
      </div>

      <div class="login__footer">
          <button @click="handleEmailLoginClick" class="btn btn-large btn-primary">
            Submit
          </button>
          <slot name="link">hjhk</slot>
      </div>
  </div>
  
</template>

<script>
import IconFacebook from "@/components/base/icons/facebook.vue";
import IconGoogle from "@/components/base/icons/google.vue";
import IconGithub from "@/components/base/icons/github.vue";
import BaseInput from "@/components/base/BaseInput.vue";

import { mapActions } from "vuex";

export default {
  name: "Login",
  props: {},
  components: {
    IconFacebook,
    IconGoogle,
    IconGithub,
    BaseInput,
  },
  methods: {
    ...mapActions({
      loginWithEmailAndPassword: "loginWithEmailAndPassword",
      signUpWithFaceBook: "signUpWithFacebook",
      signUpWithGoogle: "signUpWithGoogle",
      signUpWithGithub: "signUpWithGithub",
    }),
    handleEmailLoginClick() {
      const email = this.$refs.login_email.$el.firstChild.value;
      const password = this.$refs.login_password.$el.firstChild.value;
      console.log(email);
      console.log(password);
      this.loginWithEmailAndPassword({ email, password });
    },
    handleSocialProviderClick(provider) {
      switch (provider) {
        case "facebook": {
          this.signUpWithFaceBook();
          break;
        }
        case "google": {
          this.signUpWithGoogle();
          break;
        }
        case "github": {
          this.signUpWithGithub();
          break;
        }
      }
    },
  },
};
</script>

<style lang="stylus">

@import "../style/index.styl"
.login
  display flex
  flex-direction column
  justify-content space-between
  background white
  .login__header
    height 100px
    .title
      display block
      font-size 50px
      margin-top 20px
    p
      margin 0
      padding 0
  .login__content
    flex-grow 1
    display flex
    flex-direction column
    .login__content--socials
        display flex
        padding 20px 0px
        justify-content space-around
        align-items center
        height 200px
        .btn
          width 90px
          height 60px
          display flex
          justify-content center
          align-items center
          .icon
            width 25px
            margin-left 5px 
        .btn-secondary
          border-color $app-darkblue
          color $app-darkblue
        .btn-danger
          border-color $app-darkred
          color white
    .login__content--separator
      margin-top 10px
      position: relative;
      z-index: 1;
    
      &:before 
        border-top: 2px solid $app-grey;
        content:"";
        margin: 0 auto; /* this centers the line to the full width specified */
        position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
        top: 50%; left: 0; right: 0; bottom: 0;
        width: 60%;
        z-index: -1;
      span 
        /* to hide the lines from behind the text, you have to set the background color the same as the container */ 
        background: #fff; 
        padding: 0 15px; 
    
    .login__content--email
      flex-grow 1
      min-height 170px
      .form-group
        display flex
        height 100%
        align-items center
        justify-content space-around
        padding 20px 20px
      
    
  .login__footer
    display flex
    flex-direction  column
    justify-content center
    align-items center
    padding 20px
    .btn
      height 100px
      width 30%
      font-size 25px
      vertical-align center


</style>
