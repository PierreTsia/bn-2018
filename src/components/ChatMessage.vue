<template>
  <div class="chatMessage">

    {{message.text}}

    {{message.id}}
  </div>
  
</template>
<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="stylus" scoped>
.chatMessage
  border 1px solid red
  width 100%
  padding 10px
</style>
