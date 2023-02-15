import React, { Fragment, useEffect, useState } from "react";
import classes from "./Photo.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Photo = () => {
  const [photos, setphotos] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${params.id}/photos`
      );
      setphotos(response.data);
    };
    fetchData();
  });

  return (
    <Fragment>
      <div className={classes.mainPhoto}>
        {photos.map((photo) => (
          <section key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} alt="p"></img>
          </section>
        ))}
      </div>
    </Fragment>
  );
};

export default Photo;
