import * as firebase from 'firebase';

const config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "react-redux-firebase-c2e9c.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-c2e9c.firebaseio.com",
    projectId: "react-redux-firebase-c2e9c",
    storageBucket: "react-redux-firebase-c2e9c.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxx"
  };

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };