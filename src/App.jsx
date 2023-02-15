import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Albums from "./Album_page/Albums";
import Login from "./Login-page/Login";
import Photo from "./Album_page/Photo";
import React, { useState } from "react";
import { UserContext } from "./Album_page/UserContext";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, setLoggedIn, isLoggedIn }}
    >
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Albums />} path="/Albums" exact />
          <Route element={<Photo />} path="/Photo/:id" />
        </Route>
        <Route element={<Login />} path="/" />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
