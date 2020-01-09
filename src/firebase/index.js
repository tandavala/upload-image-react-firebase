import firebase from "firebase/app";

import "firebase/storage";

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
