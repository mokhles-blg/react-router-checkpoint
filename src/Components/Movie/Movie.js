import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Movie.css"
const Movie = ({ match }) => {
  let location = useLocation();
  const { title, description, url } = location.state;
  const history = useHistory(match);
  return (
    <div className="movieDetails">
      <iframe
        title={title}
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen
      ></iframe>
      <h3 className="movieTitle">{title}</h3>
      <p className="desc">{description}</p>
      <br />
      <Button type="button" class="light" onClick={() => history.push("/")}>
        Back To the Homepage
      </Button>
    </div>
  );
};

export default Movie;
