import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/clientApp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signout() {
    signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return {
    currentUser,
    loading,
    signup,
    login,
    signout
  };
}
