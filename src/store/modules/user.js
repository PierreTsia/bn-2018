import * as firebase from "firebase";
import * as types from "../mutation-types";
const state = {
  user: null,
  test: ["1", "3", "pouet"],
};

const getters = {
  currentUser: state => state.user,
};

const actions = {
  registerWithEmailAndPassword({ commit }, payload) {
    const newUser = {
      email: payload.email,
      password: payload.password,
      displayName: null,
      photoUrl: null,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(auth => {
        const newUser = {
          email: auth.user.email,
          id: auth.user.uid,
          name: auth.user.displayName,
          photoUrl: auth.photoUrl,
        };
        commit(types.SET_CURRENT_USER, newUser);
      })
      .catch(err => console.log(err));
  },

  loginWithEmailAndPassword({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(auth => {
        const loggedUser = {
          email: auth.user.email,
          id: auth.user.uid,
          displayName: auth.user.displayName,
          photoUrl: auth.user.photoURL,
        };
        console.log(loggedUser);
        commit(types.SET_CURRENT_USER, loggedUser);
      });
  },

  autoLogin({ commit }, payload) {
    const user = {
      email: payload.email,
      id: payload.uid,
      displayName: payload.displayName,
      photoUrl: payload.photoURL,
    };
    commit(types.SET_CURRENT_USER, user);
  },

  logOutUser({ commit }) {
    firebase.auth().signOut();
    commit(types.SET_CURRENT_USER, null);
  },
};

const mutations = {
  [types.SET_CURRENT_USER](state, user) {
    console.log(user);
    state.user = user;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
