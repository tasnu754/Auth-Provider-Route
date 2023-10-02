import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../../firebaseConfig";

export const AuthContext = createContext(null);

const ContextElement = ({ children }) => {
  const [user, setuser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email , password) => {
    signInWithEmailAndPassword(auth , email , password)
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
