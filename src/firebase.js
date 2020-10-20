import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5aWRO-jLd19RNCriHy8sE2XVKcrYZqa0",
    authDomain: "twitter-reactclone.firebaseapp.com",
    databaseURL: "https://twitter-reactclone.firebaseio.com",
    projectId: "twitter-reactclone",
    storageBucket: "twitter-reactclone.appspot.com",
    messagingSenderId: "651972563100",
    appId: "1:651972563100:web:2c2a4a6f128d446c4c1d59",
    measurementId: "G-ST1YKXLCKB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;