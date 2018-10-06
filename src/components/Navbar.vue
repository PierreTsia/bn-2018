<template>
  <nav class="border fixed split-nav">
    <div class="nav-brand">
      <h3><a href="#">Bnav</a></h3>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1">
      <button class="nav__burger">
      <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
      </button>
      <div class="collapsible-body border">
        <ul class="inline">
          <li><a href="#">Documentation</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Github</a></li>
        </ul>
      </div>
    </div>
    <div class="nav__links">
      <router-link  class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<style lang="stylus">
nav
  height 75px
  background-color #B8E6FF
  .collapsible>button
    background #B8E6FF
  .collapsible
    background #B8E6FF
    .collapsible-body
      position absolute
      top 73px
      left 0px
      width 20vw
      height 100vh  
      background #B8E6FF
      border 2px solid #41403e !important
      padding 10px !important
  .nav__links
    display flex
    width 50%
    justify-content flex-end
    align-items center
    @media screen and (max-width 770px)
      display none
    .link
      margin-left 15px


</style>
