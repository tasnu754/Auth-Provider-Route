import { useContext } from "react";
import auth from "../../firebaseConfig";


const CustomContext = () => {
    const useCustomContext = useContext(auth)
    return useCustomContext;
};

export default CustomContext;