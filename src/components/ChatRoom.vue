<template>
<div>
  <ChatMessage v-for="message in flatMessages" :key="message.id" :message="message"/>
</div>
  
</template>
<script>
import ChatMessage from "@/components/ChatMessage";
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "ChatRoom",
  components: {
    ChatMessage,
  },
  data() {
    return {
      message: "ChatRroomm Component",
    };
  },
  methods: {
    ...mapActions({
      fetchMessages: "fetchMessages",
      removeChatListener: "removeChatListener",
    }),
  },
  computed: {
    ...mapGetters({ allMessages: "allMessages" }),
    flatMessages() {
      const messages = [];
      _.forEach(this.allMessages, (value, key) => {
        messages.push({ id: key, ...value });
      });
      return messages;
    },
  },
  mounted() {
    this.fetchMessages();
  },
  destroyed() {
    this.removeChatListener();
  },
};
</script>
<style lang="stylus" scoped>

</style>
