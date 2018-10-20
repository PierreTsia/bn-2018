<template>
 <div class=" dashboardMenuTabs">
  <div class="row tabsMenu">
    <span 
    @click="setACtiveComponent(item.slug)" 
    :class="{
      'item': true,
      'border': currentTabComponent === item.slug,
      '--isActive':currentTabComponent === item.slug }" 
      v-for="item in menuItems" :key="item.slug">
        <IconChat v-if="item.slug === 'ChatRoom'" class="icon icon-medium"/>
        <IconUsers v-if="item.slug === 'UsersBoard'" class="icon icon-medium"/>
        <IconTrophy v-if="item.slug === 'UserStats'" class="icon icon-medium"/>
                
      </span>
  </div>
  <div class="row tabsContent">
      <component :is="currentTabComponent"></component>
  </div>
  
 </div>
</template>
<script>
import ChatRoom from "@/components/ChatRoom.vue";
import UsersBoard from "@/components/UsersBoard.vue";
import UserStats from "@/components/UserStats.vue";
import IconChat from "@/components/base/icons/chat.vue";
import IconUsers from "@/components/base/icons/users.vue";
import IconTrophy from "@/components/base/icons/trophy.vue";

export default {
  name: "DashBoardMenuTabs",
  components: {
    ChatRoom,
    UsersBoard,
    UserStats,
    IconChat,
    IconUsers,
    IconTrophy,
  },
  data() {
    return {
      menuItems: [
        { slug: "ChatRoom", label: "Chat" },
        { slug: "UsersBoard", label: "Last Users" },
        { slug: "UserStats", label: "Stats" },
      ],
      currentTabComponent: "UsersBoard",
    };
  },
  methods: {
    setACtiveComponent(component) {
      this.currentTabComponent = component;
    },
  },
  computed: {},
  destroyed() {
    console.log("destroy");
  },
};
</script>
<style lang="stylus" scoped>
@import "../../style/index.styl"

  .dashboardMenuTabs
    width 100%
    margin-top 20px
    background white
    display flex
    flex-direction column
    padding 0
    margin 0
    .tabsContent
      flex-grow 1
      width 100%
      padding 0
      margin 0
    .tabsMenu
      height 50px
      display flex
      justify-content flex-start
      padding 0
      margin 0
      .item
        margin 0
        width 150px
        display flex
        flex-direction column
        justify-content center
        align-items center
        cursor pointer
      .--isActive
        border 2px solid #0071DD
        background-color rgba($app-blue, 0.5) 
</style>
