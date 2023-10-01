import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig";

const AuthContext = createContext(null);

const ContextElement = ({ children }) => {

    const signin = (email , password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const content = {
        signin
    }
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
