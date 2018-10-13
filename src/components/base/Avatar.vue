<template>
  <div class="avatar">  
    <img :class="size" :src="url" alt="avatar">
  </div>
  
</template>
<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      default: "http://www.erickdyck.de/demo/dashboard/images/profile.gif",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
};
</script>

<style lang="stylus" scoped>
  .avatar
    img 
      border-radius 50%
    .small
      width 30px
      height 30px
    .medium
      width 50px
      height 50px
    .big
      width 100px
      height 100px
</style>
