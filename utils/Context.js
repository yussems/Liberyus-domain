import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({});

export const useUserContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
   const status = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError(false)
      setLoading(false)
    });
    return status
  }, []);



  const loginEmailandPassword = async (email, password) => {
    console.log('sign in');
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        `${email}@gmail.com`,
        password
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const logOut = async () => {
    console.log("sign out");
    await signOut(auth);
  };


  const contextValue = {
    user,loading,error,loginEmailandPassword,logOut
  }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
