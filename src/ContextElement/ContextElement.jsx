import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig";

export const AuthContext = createContext(null);

const ContextElement = ({ children }) => {

  const [currentUser ,setCurrentUSer] = useState(null);

    const signin = (email , password) =>{
      return createUserWithEmailAndPassword(auth, email, password);
  }
 

    const content = {
      signin,
      setCurrentUSer,
      currentUser,
    };
  return (
    <div>
          <AuthContext.Provider value={content}>
              {children}
          </AuthContext.Provider>
    </div>
  );
};

ContextElement.propTypes = {
  children: PropTypes.node,
};

export default ContextElement;
