import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyBA43tkiRbRyDitWMMJxScvWrS4ApQ84DI",
  authDomain: "notes-app-27628.firebaseapp.com",
  projectId: "notes-app-27628",
  storageBucket: "notes-app-27628.appspot.com",
  messagingSenderId: "610630294568",
  appId: "1:610630294568:web:3fe623e0a2525e4c7aa91d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
