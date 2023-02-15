import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Album_page/UserContext";

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);

  let auth = { token: isLoggedIn };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
