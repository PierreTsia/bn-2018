import firebase from "./firebase";
const settings = { timestampsInSnapshots: true };
const db = firebase.firestore();

db.settings(settings);

export default db;
