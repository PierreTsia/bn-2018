import * as firebase from "firebase";
import * as types from "../mutation-types";
import db from "../../db";
import SanitizeHelper from "../../helpers/sanitizeHelper";

const state = {
  user: null,
  profile: null,
};

const getters = {
  currentUser: state => state.user,
  userProfile: state => state.profile,
};

const actions = {
  getUserProfile({ commit, dispatch }, profileId) {
    const profilesRef = db.collection("profiles");
    const query = profilesRef.where("userId", "==", profileId);
    query
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          commit(types.SET_USER_PROFILE, { id: doc.id, ...doc.data() });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  },

  signUpWithFacebook({ commit }) {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
    console.log("provider");
  },
  registerWithEmailAndPassword({ commit, dispatch }, payload) {
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

        const profileData = {
          userId: auth.user.uid,
          displayName: auth.user.displayName
            ? auth.user.displayName
            : SanitizeHelper.getNamefromEmail(auth.user.email),
          photoUrl: auth.photoUrl
            ? auth.photoUrl
            : "http://www.erickdyck.de/demo/dashboard/images/profile.gif",
          registrationDate: new Date(),
          lastOnline: new Date(),
        };

        dispatch("createProfile", profileData, { root: true });

        commit(types.SET_CURRENT_USER, newUser);
      })
      .catch(err => console.log(err));
  },

  loginWithEmailAndPassword({ commit, dispatch }, payload) {
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
        dispatch("getUserProfile", loggedUser.id);

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
    const profilesRef = db.collection("profiles");

    const query = profilesRef.where("userId", "==", payload.uid);
    console.log(query);
  },

  logOutUser({ commit }) {
    firebase.auth().signOut();
    commit(types.SET_CURRENT_USER, null);
  },
};

const mutations = {
  [types.SET_CURRENT_USER](state, user) {
    state.user = user;
  },
  [types.SET_USER_PROFILE](state, profile) {
    state.profile = profile;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
