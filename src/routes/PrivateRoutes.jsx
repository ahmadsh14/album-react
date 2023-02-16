import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Album_page/UserContext";

const PrivateRoutes = ({isAUth}) => {

  return isAUth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
