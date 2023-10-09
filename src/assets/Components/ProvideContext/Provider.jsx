import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import { postUser } from '../ApiCalls/Api';




const MyContext = createContext({});


const auth = getAuth(app)

const MyProvider = ({ children }) => {
  // Define the state or any data you want to share using the context
  const [value, setValue] = useState([]);
  const [user,setUser] = useState('')

  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(item => setValue(item))
  },[])


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
     if(user){
      postUser(loggedUser)
     }
      // setLoading(false);
   
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Allvalue = {
    value,
    createUser,
    login,
    user,
    logout,
    auth
  }
  return (
    <MyContext.Provider value={Allvalue}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
const useContext = () => {
  const context = React.useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { MyProvider, useContext };
