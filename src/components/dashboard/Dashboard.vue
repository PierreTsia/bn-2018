<template>
  <div class="container dashboard">
    <div class="dahboard__hero">
      <h1>Welcome {{profile.displayName}}</h1>
    </div>
    <div class="row flex-spaces">
      <div class="sm-4 col dashboard__userProfile">
        <Avatar :url="profile.photoUrl" size="big"></Avatar>
        
        </div>
      <div class="sm-4 col dashboard__lastUsers">to be evenly spaced (flex-spaces)</div>
    </div>
  </div>
</template>
<script>
import Avatar from "@/components/base/Avatar.vue";
export default {
  name: "Dashboard",
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar,
  },
};
</script>
<style lang="stylus" scoped>
</style>
