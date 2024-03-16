// src/components/userAuth.js
//
// Google and anon sign in and out components module.
import React from "react";
import { Button } from "react-native";

import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInAnonymously, signOut } from "firebase/auth";

import { fireAuth } from "../fireInit";

// Google sign in component:
export function SignInGoogle() {
}

// Anon sign in component:
export function SignInAnon() {
  const anonHandler = () => {
    signInAnonymously(fireAuth)
      .then(() => {
        console.log("Signed in Anonymously");
      })
      .catch((err) => {
        console.log("Error when sign in anon: ", err.message);
      });
  };
  return (
    <Button
      title="Sign in Anonymously"
      onPress={anonHandler}
    />
  );
}

// Universal sign out component:
export function SignOut() {
  const signOutHandler = () => {
    fireAuth.signOut()
      .then(() => {
        console.log("Signed out successfully");
      }).catch((err) => {
        console.log("Error trying to sign out: " + err.message);
      });
  };
  return (
    <Button
      title = "Sign Out"
      onPress = {signOutHandler}
    />
  );
}
