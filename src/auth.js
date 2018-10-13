import firebase from "./firebase";
import store from "./store";
import * as types from "./store/mutation-types";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("autoLogin", user);
  }
});
