<template>
    <svg v-bind="$attrs">
        <slot />
    </svg>
</template>
<script>
export default {
  name: "Icon",
};
</script>
<style lang="stylus" scoped>
@import "../../style/index.styl"



.icon
  display inline-block
.icon-default
  stroke $app-grey
  fill $app-grey
.icon-normal
  height 25px
  height 25px
.icon-big
  height 50px
  width 50px
.icon-small
  height 15px
  width 15px
.icon-x-small
  height 10px
  width 10px
.icon-xx-small
  height 5px
  width 5px
.icon-default
  fill $app-grey
  stroke $app-grey
.icon-disabled
  fill rgba(grey, 0.5)
  stroke rgba(grey, 0.5)
.icon-success
  fill $app-green
  stroke $app-green
.icon-inform
  fill $app-darkblue
  stroke $app-darkblue
.icon-danger
  fill $app-darkred
  stroke $app-darkred
.icon-warning
  fill yellow
  stroke yellow
.icon-white
  fill white
  stroke white

</style>
