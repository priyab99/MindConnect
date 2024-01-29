import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import axios from "axios";

// Creating an authentication context
export const AuthContext = createContext(null);

// Getting the authentication instance from Firebase
const auth = getAuth(app);

// Defining the authentication provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [loading, setLoading] = useState(true); // State to manage loading status

  const googleProvider = new GoogleAuthProvider(); // Google authentication provider

  // Function to create a user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Setting the user in state
      console.log('current user', currentUser);

      if (currentUser) {
        // If a user is authenticated, obtaining and setting the JWT token
        axios.post('https://mind-connect-server.vercel.app/jwt', {
          email: currentUser.email
        })
        .then(data => {
          localStorage.setItem('access-token', data.data.token);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error while obtaining JWT token:", error);
          setLoading(false);
        });
      } else {
        // If no user is authenticated, removing the JWT token from local storage
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });

    // Cleanup function to unsubscribe from the authentication state changes
    return () => unsubscribe();
  }, []); // The effect runs only once when the component mounts

  // Context value containing authentication-related functions and data
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn
  };

  // Providing the context value to the children components
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
