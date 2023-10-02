import { Navigate } from "react-router-dom";
import CustomContext from "../../CustomContext/CustomContext";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const { user } = CustomContext();
    if (user) {
        return children;
    }
    else {
        alert("Please sign in first");
         return <Navigate to="/signIn" replace={true} />;
    }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;