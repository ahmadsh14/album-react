import React, { Fragment, useState, useEffect } from "react";
import classes from "./Albums.module.css";
import Header from "./Header";
import axios from "axios";
const Albums = () => {
  const [viewAlbums, setAlbums] = useState([]);
  const userGetInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(response.data);
    };
    fetchData();
  },[]);

  const finalAlbum = viewAlbums.filter(
    (data) => data.userId === userGetInfo.id
  );

  return (
    <Fragment>
      <Header />
      <div className={classes.mainAlbum}>
        {finalAlbum.map((al) => (
          <section key={al.id}>
            <h1>{al.title}</h1>
          </section>
        ))}
      </div>
    </Fragment>
  );
};

export default Albums;
