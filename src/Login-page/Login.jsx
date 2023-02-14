import React, { Fragment, useState, useEffect, useContext } from "react";
import { UserContext } from "../Album_page/UserContext";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [userMailInput, setuserMailInput] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(response.data);
      } catch (error1) {
        console.log("error1: ", error1);
      }
    };
    fetchData();
  }, []);

  const userEmailInput = (event) => {
    setuserMailInput(event.target.value);
  };
  const emailChecker = (event) => {
    event.preventDefault();
    try {
      const data = user.find(
        (data) =>
          data.email.toLocaleLowerCase() === userMailInput.toLocaleLowerCase()
      );
      if (data !== undefined) {
        localStorage.setItem("user", JSON.stringify(data));
        setUserInfo(data);
        navigate("/Albums");
      }
    } catch (error1) {
      console.log("error1: ", error1);
    }
  };

  return (
    <Fragment>
      <div className={classes.mainAll}>
        <h1>Log In</h1>
        <form onSubmit={emailChecker}>
          <input
            type="email"
            placeholder="jane@example.com"
            className={classes.emailInput}
            onChange={userEmailInput}
          />
          <input
            type="password"
            placeholder="*********"
            className={classes.passInput}
          />
          <p id="error1"></p>
          <input type="submit" value="Log in" className={classes.btn} />
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
