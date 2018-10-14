<template>
  <div>
    {{message.text}}
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
};
</script>
