import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieRating from "../Rating/Rating";
import ModalAddMovie from "../AddMovie/AddMovie";

import "./MovieCard.css";

const MovieCard = ({ movie, addCard, AddMovie }) => {
  return addCard ? (
    <Card className="movieCard">
      <Card.Body>
        <Card.Title className="addMovieBtn">
          <ModalAddMovie AddMovie={AddMovie} />
        </Card.Title>
      </Card.Body>
    </Card>
  ) : (
    <Card className="movieCard">
      <Link
        to={{ pathname: `/movie/${movie.id}`, state: movie }}
        key={movie.id}
      >
        <Card.Img variant="top" src={movie.img} />
      </Link>
      <Card.Body>
        <Link
          to={{ pathname: `/movie/${movie.id}`, state: movie }}
          key={movie.id}
        >
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
        </Link>
        <MovieRating filterRate={false} movieRating={movie.rating} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
