import firebase, { firestore } from "firebase/app";

import "firebase/storage";

var config = {
  apiKey: "AIzaSyAixnYAj9x9tKPw5DfCnEMSzsdB5W1_uKo",
  authDomain: "bomcaracter-ce053.firebaseapp.com",
  databaseURL: "https://bomcaracter-ce053.firebaseio.com",
  projectId: "bomcaracter-ce053",
  storageBucket: "bomcaracter-ce053.appspot.com",
  messagingSenderId: "701395526037",
  appId: "1:701395526037:web:f4a1008c6e76ab267bd69c",
  measurementId: "G-ZN9JCGVKWM"
};
// Initialize Firebase
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
