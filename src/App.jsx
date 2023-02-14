import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Albums from "./Album_page/Albums";
import Login from "./Login-page/Login";
import React, { useState } from "react";
import { UserContext } from "./Album_page/UserContext";
function App() {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Albums />} path="/Albums" exact />
        </Route>
        <Route element={<Login />} path="/" />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
