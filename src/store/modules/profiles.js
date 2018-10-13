import * as firebase from "firebase";
import * as types from "../mutation-types";
import _ from "lodash";
import db from "../../db";

const state = {
  profiles: [],
};

const actions = {
  addProfile({ commit }) {
    db.collection("profiles").add({
      title: "test",
      userId: "pouet",
    });
  },

  fetchProfiles({ commit }) {
    db.collection("profiles").onSnapshot(snapshot => {
      const profiles = [];
      snapshot.docChanges().forEach(change => {
        profiles.push({ id: change.doc.id, ...change.doc.data() });
        /*   commit(types.UPDATE_PROFILES, {
          id: change.doc.id,
          ...change.doc.data(),
        }); */
      });
      commit(types.SET_PROFILES, profiles);
    });
    /*  db.collection("profiles")
      .get()
      .then(querySnapshot => {
        const allProfiles = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          allProfiles.push(_.merge({ id: doc.id, ...doc.data() }));
        });
        commit(types.SET_PROFILES, allProfiles);
      }); */
  },

  createProfile({ commit }, payload) {
    db.collection("profiles").add(payload);
    commit(types.SET_USER_PROFILE, payload);
  },
};

const mutations = {
  [types.SET_PROFILES](state, profiles) {
    state.profiles = _.concat(state.profiles, profiles);
  },
};
export default {
  state,
  actions,
  //getters,
  mutations,
};
