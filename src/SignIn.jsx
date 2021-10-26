import React from "react";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { firebase } from "./Firebase/firebase";

const SignIn = () => {
  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return <button onClick={SignInWithFirebase}>Sign In with Google</button>;
  };
};
export default SignIn;
