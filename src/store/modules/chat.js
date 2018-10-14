import * as firebase from "firebase";
import * as types from "../mutation-types";
import _ from "lodash";
import db from "../../db";

const state = {
  messages: [],
};

const getters = {
  allMessages: state => state.messages,
};

const actions = {
  fetchMessages({ commit, dispatch }) {
    const chatRoom = db.collection("chatroom");
    const mainRoom = chatRoom.doc("main");
    mainRoom
      .collection("messages")
      .get()
      .then(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(doc => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        commit(types.SET_MESSAGES, messages);
      });
    dispatch("subscribeToMainRoomChat");
  },

  subscribeToMainRoomChat({ commit }) {
    const chatRoom = db.collection("chatroom");
    const mainRoom = chatRoom.doc("main");
    mainRoom.collection("messages").onSnapshot(snapshot => {
      const newMessages = [];
      const modifiedMessages = [];
      snapshot.docChanges().forEach(change => {
        console.log("change", change);
        switch (change.type) {
          case "added": {
            newMessages.push({ id: change.doc.id, ...change.doc.data() });
            break;
          }
          case "modified": {
            modifiedMessages.push({ id: change.doc.id, ...change.doc.data() });
          }
        }
      });
      console.log("modified", modifiedMessages);
      console.log("added", newMessages);
      newMessages.length
        ? commit(types.ADD_MESSAGE, newMessages)
        : commit(types.UPDATE_MESSAGES, modifiedMessages);
    });
  },
  removeChatListener({ commit }) {
    const chatRoom = db.collection("chatroom");
    const mainRoom = chatRoom.doc("main");
    const unsubscribe = mainRoom.collection("messages").onSnapshot(function() {
      console.log("Unsuscribing to chatroom");
    });
    // ...
    // Stop listening to changes
    unsubscribe();
    commit(types.SET_MESSAGES, []);
  },
};

const mutations = {
  [types.SET_MESSAGES](state, messages) {
    state.messages = messages;
  },
  [types.ADD_MESSAGE](state, messages) {
    state.messages.push(messages);
  },
  [types.UPDATE_MESSAGES](state, modifiedMessages) {
    modifiedMessages.forEach(modifiedMessage => {
      const foundIndex = state.messages.findIndex(
        m => m.id == modifiedMessage.id,
      );
      state.messages[foundIndex] = modifiedMessage;
    });
  },
};
export default {
  state,
  actions,
  getters,
  mutations,
};
