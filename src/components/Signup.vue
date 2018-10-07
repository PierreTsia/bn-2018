<template>


    <div class="signup card" style="width: 25rem;">
      <div class="card-body">
        <h4 class="card-title">Sign up</h4>
        <h5 class="card-subtitle">Nice looking subtitle.</h5>
        <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
        <button>Let me go here!</button>
      </div>
    </div>

  
</template>

<script>
export default {
  name: "Signup",
  props: {},
};
</script>

<style lang="stylus">

.signup
  border 1px solid red
  height 100%
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  .card-body
    margin-top 80px
    flex-direction column !important
    justify-content flex-end !important 
    .card-title
      font-size 55px
      button 
        margin-top 20px
    





</style>
