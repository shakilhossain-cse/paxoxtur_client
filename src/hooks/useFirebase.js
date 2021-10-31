import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const [User, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // google login 
  const loginWithGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
     .finally(() => {
        setIsLoading(false)
      });
  };
  useEffect(() => {
    setIsLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false)
      }
    });
  }, []);

  return {
    logOut,
    User,
    loginWithGoogle,
    setUser,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
