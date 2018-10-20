<template>
  <div>
    <ChatMessage v-for="message in flatMessages" :key="message.id" :message="message"></ChatMessage>
  </div>
  
</template>
<script>
import ChatMessage from "@/components/ChatMessage";
import { mapActions, mapGetters, mapState } from "vuex";
import _ from "lodash";
export default {
  name: "ChatRoom",
  components: {
    ChatMessage,
  },
  data() {
    return {};
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
      return _.reduce(
        this.allMessages,
        (result, value, key) => {
          result.push({ id: key, ...value });
          return result;
        },
        [],
      );
      /*  const messages = [];
      _.forEach(this.allMessages, (value, key) => {
        messages.push({ id: key, ...value });
      });
      return messages; */
    },
  },
  watch: {
    allMessages: {
      immediate: true,
      deep: true,
      handler(curr, before) {
        console.log({ before });
        console.log({ curr });
      },
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
