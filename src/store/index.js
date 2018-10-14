import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import profiles from "./modules/profiles.js";
import chat from "./modules/chat.js";

//import profiles from "./profiles";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user,
    profiles: profiles,
    chat: chat,
  },
});

export default store;
