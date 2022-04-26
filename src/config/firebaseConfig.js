import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDlK9Ejdmh9oNdU6jCmp6XC-tjAPPtlJn4",
  authDomain: "kpilabproj.firebaseapp.com",
  databaseURL: "https://kpilabproj-default-rtdb.firebaseio.com",
  projectId: "kpilabproj",
  storageBucket: "kpilabproj.appspot.com",
  messagingSenderId: "606352372412",
  appId: "1:606352372412:web:d6ca5a6b75ffe664d396b9",
  measurementId: "G-HMZQXZYK78"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      func(true, user)
    } else {
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
