import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { users } = useContext(AuthContext);

    if (users) {
        return children;
    }

    return <Navigate to="/singin"></Navigate>;
};

export default PrivateRoute;