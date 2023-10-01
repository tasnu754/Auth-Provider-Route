import { useContext } from "react";
import  { AuthContext } from "../ContextElement/ContextElement";

 

const CustomContext = () => {
    const useCustomContext = useContext(AuthContext);
    return useCustomContext;
};

export default CustomContext;