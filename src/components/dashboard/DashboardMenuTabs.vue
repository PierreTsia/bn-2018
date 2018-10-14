<template>
 <div class=" dashboardMenuTabs">
  <div class="row tabsMenu">
    <span @click="setACtiveComponent(item.slug)" class="item" v-for="item in menuItems" :key="item.slug">{{item.label}}</span>
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

export default {
  name: "DashBoardMenuTabs",
  components: {
    ChatRoom,
    UsersBoard,
    UserStats,
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
};
</script>
<style lang="stylus" scoped>
  .dashboardMenuTabs
    width 100%
    border 1px solid green 
    height 500px
    margin-top 20px
    background white
    display flex
    flex-direction column
    padding 0
    margin 0
    .tabsContent
      flex-grow 1
      border 1px solid coral
      width 100%
      padding 0
      margin 0
    .tabsMenu
      border 1px solid pink
      height 10%
      display flex
      justify-content flex-start
      padding 0
      margin 0
      .item
        border 1px solid cyan
        margin 0
        width 150px
        display flex
        flex-direction column
        justify-content center
        align-items center
        cursor pointer
</style>
