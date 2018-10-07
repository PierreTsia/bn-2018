import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const config = {
      apiKey: "AIzaSyDEX1SstQK3zBIF_e5zTsWFZpF-McpceD8",
      authDomain: "bn-2018.firebaseapp.com",
      databaseURL: "https://bn-2018.firebaseio.com",
      projectId: "bn-2018",
      storageBucket: "bn-2018.appspot.com",
      messagingSenderId: "1063088426054",
    };

    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLogin", user);
      }
    });
  },
  mounted() {
    console.log(store);
  },
}).$mount("#app");
