import React, { Fragment } from "react";
import classes from "./Albums.module.css";

const Header = () => {
  return <Fragment>
     <div className={classes.main}>
        <h6 className={classes.headerTitle}>Discover</h6>
        <h4 className={classes.subtitle}>Whats new today</h4>
      </div>
  </Fragment>;
};

export default Header;
