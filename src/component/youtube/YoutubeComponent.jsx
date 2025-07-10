import React, { Fragment } from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = ({
  time = "00.00",
  title = "Ini Judulnya",
  description = "Ini Descriptionnya",
}) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
        <p className="time">{time}</p>
      </div>
      <p className="title">{title}</p>
      <p className="desc">{description}</p>
    </div>
  );
};

export default YoutubeComponent;
