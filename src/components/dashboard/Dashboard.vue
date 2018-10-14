<template>
  <div class="container dashboard">
    <div class="dahboard__hero">
      <h1>Welcome {{profile.displayName}}</h1>
    </div>
    <div class="row flex-spaces">
      <div class="sm-5 col dashboard__userProfile">
        <Avatar :url="profile.photoUrl" size="big"></Avatar>
          
        <div class="row dashboard__userProfile--text">
            <div class="info__item text-center">Member since:</div>
            <div class="info__item text-center">{{this.memberSince}}</div>
                      
        </div>
        
        </div>
      <div class="sm-5 col dashboard__userProfile__summary">
        <div class="row">
     
           <div class="text-center info__item">
            Your profile
          </div>

           <div class="text-center info__item">
           Item 1
          </div>
            <div class="text-center info__item">
           Item 2
          </div>

          <div class="text-center info__item">
           <button class="btn-secondary">Edit your profile</button>
          </div>


        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "@/components/base/Avatar.vue";
import dateHelper from "../../helpers/dateHelper.js";
import _ from "lodash";
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
  computed: {
    memberSince() {
      return dateHelper.distanceToNow(this.profile.registrationDate.toDate());
    },
  },
};
</script>
<style lang="stylus" scoped>
.dashboard
  background white
  padding 20px 30px 
  margin-bottom 30px
  .dashboard__userProfile
    display flex;
    flex-direction column
    align-items center
  .info__item
    width 100%
    padding 5px

</style>
