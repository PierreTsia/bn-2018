<template>
  <nav class="row border fixed">
    <div class="nav-brand col-3">
      <h4><a href="#">Get PaperCSS</a></h4>
    </div>
  
    <div class="collapsible">
      <input id="collapsible2" type="checkbox" name="collapsible2">
      <button>
        <label for="collapsible2">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
      </button>
      <div class="collapsible-body border">
        <ul class="inline">
          <li v-for="link in guestLinks" :key="link.key">
             <router-link 
              :to="link.route">
              {{link.label}}
            </router-link>
          </li>
         
        </ul>
      </div>
    </div>
      <div class="nav__links col-">
        
      <router-link 
        v-for="link in guestLinks" 
        class="link" 
        :to="link.route" 
        :key="link.key">
        {{link.label}}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      guestLinks: [
        { label: "About", route: "/about", key: "about" },
        { label: "Home", route: "/", key: "home" },
      ],
    };
  },
};
</script>

<style lang="stylus">
@import "../style/index.styl"

nav
  height 75px
  background-color $app-blue
  display flex
  flex-direction row
  border-color $app-grey !important
  .nav-brand
    border 1px solid $app-salmon
    max-width 33%
    h4
      font-size 35px
      font-weight bolder
      padding 8px
      @media screen and (max-width 815px)
        font-size 20px
  .collapsible>button
    background $app-blue
  .collapsible
    background rgba($app-blue 0.5)
    border 1px solid $app-green
    flex-grow 1
    .collapsible-body
      position absolute
      top 73px
      left 0px
      width 30vw
      height 100vh !important  
      background $app-blue
      border 2px solid $app-grey !important
      padding 10px !important
      @media screen and (min-width 770 px)
        display  none 
        
      
  .nav__links
    display flex
    border 1px solid red
    width 20%
    justify-content center
    align-items center
    @media screen and (max-width 770px)
      display none
    .link
      margin-left 15px


</style>
