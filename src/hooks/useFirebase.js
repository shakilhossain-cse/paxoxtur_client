import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google Login
  const loginwithgoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //   create user by emall password
  const registeruser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        addName(name);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //   add profile name
  const addName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  //   login useing email and password
  const loginuseingemail = (email, password) => {
    setIsLoading(true);
    console.log(email,password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
      }
    });
  }, []);
  //   Logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("Logout Error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    loginwithgoogle,
    logout,
    loginuseingemail,
    registeruser,
    user,
    isLoading,
    error,
  };
};

export default useFirebase;
