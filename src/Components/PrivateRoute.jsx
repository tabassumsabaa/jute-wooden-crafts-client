import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>; 
      }

    if (!user) {
        return <Navigate to="/singin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;