import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWNaHxP6YvZS0v8Rnte3i58x7yNh-1nQQ",
  authDomain: "login-86f17.firebaseapp.com",
  projectId: "login-86f17",
  storageBucket: "login-86f17.appspot.com",
  messagingSenderId: "895313433097",
  appId: "1:895313433097:web:874ad42949a4d7b40b5ed8",
  measurementId: "G-MJBJBN0CQG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
