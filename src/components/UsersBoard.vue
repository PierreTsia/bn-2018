<template>
  <div class="usersBoard">
    <div class="userProfile">
      <div v-for="profile in lastProfiles" :key="profile.id" class="collapsible">
        <input :id="`collapsible--${profile.userId}`" type="checkbox" name="collapsible">
        <label :for="`collapsible--${profile.userId}`">
          <Avatar :url="profile.photoUrl" size="small"/>
          <span>
            {{profile.displayName}}
          </span>
          <span>
            Last online {{memberSince(profile.lastOnline.toDate())}} ago
          </span>
          
          </label>
        <div class="collapsible-body">
          <span>About {{profile.displayName}} </span>
        </div>
      </div>
     
 


    </div>
  </div>
  
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from "@/components/base/Avatar.vue";
import dateHelper from "./../helpers/dateHelper.js";

export default {
  name: "UsersBoard",
  components: {
    Avatar,
  },
  data() {
    return {
      message: "UsersBoard Component",
    };
  },
  methods: {
    ...mapActions({ fetchProfiles: "fetchProfiles" }),
    memberSince(timestamp) {
      return dateHelper.distanceToNow(timestamp);
    },
  },
  computed: {
    ...mapGetters({ allProfiles: "allProfiles" }),
    lastProfiles() {
      return this.allProfiles
        .sort((a, b) => {
          return a.lastOnline.toDate() > b.lastOnline.toDate() ? -1 : 1;
        })
        .slice(0, 10);
    },
  },
  mounted() {
    this.fetchProfiles();
  },
};
</script>
<style lang="stylus" scoped>
@import "../style/index.styl"

.usersBoard
  width 100%
  .collapsible
    width 100%
    label 
      display flex
      justify-content  flex-start
      align-items center
      &:hover
          color $app-darkblue
      span
        height 30px
        width 50%
        display flex
        padding 5px
        margin-left 10px
        &:hover
          color $app-darkblue !important
        &:last-child
          color $app-darkblue
          font-weight 100
          font-size 18px
          justify-content  flex-end
    .collapsible-body
      background-color rgba($app-manilla, 0.2)
      

      


</style>
