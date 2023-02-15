import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Albums.module.css";
import Header from "./Header";
import axios from "axios";
const Albums = () => {
  const [viewAlbums, setAlbums] = useState([]);
  const navigate = useNavigate();
  const userGetInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(response.data);
    };
    fetchData();
  }, []);

  const finalAlbum = viewAlbums.filter(
    (data) => data.userId === userGetInfo.id
  );

  const AlbumOnClick = (al) => {
    navigate(`/Photo/${al.id}`);
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.mainAlbum}>
        {finalAlbum.map((al) => (
          <section key={al.id} id={al.id}>
            <h1 onClick={() => AlbumOnClick(al)}>{al.title}</h1>
          </section>
        ))}
      </div>
    </Fragment>
  );
};

export default Albums;
