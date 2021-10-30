import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp()
const useFirebase = () => {
  const [User, setUser] = useState({});
  const auth = getAuth();
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
   return signInWithPopup(auth, googleProvider)
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    logOut,
    User,
    loginWithGoogle,
    setUser
  };
};

export default useFirebase;
