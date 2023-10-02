import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebaseConfig";

export const AuthContext = createContext(null);

const ContextElement = ({ children }) => {
  const [user, setuser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email , password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }


  const update = (name,photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo || "/pic.png",
    });
  }

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    } )

  }, []);

  const content = {
    user,
    register,
    signin,
    logOut,
    update,
  };
  return (
    <div>
      <AuthContext.Provider value={content}>{children}</AuthContext.Provider>
    </div>
  );
};

ContextElement.propTypes = {
  children: PropTypes.node,
};

export default ContextElement;
