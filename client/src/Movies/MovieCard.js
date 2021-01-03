import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { addToSavedList } = props;
  const { title, director, metascore, stars, id } = props.movie;
  const hasStars = stars === undefined ? false : true;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${id}`}>
          <h2>{title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {hasStars ? <h3>Actors</h3> : null}
        {hasStars
          ? stars.map((star) => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))
          : null}
      </div>
      <div
        className="save-button"
        onClick={(e) => {
          e.stopPropagation();
          addToSavedList(id);
        }}
      >
        Save
      </div>
    </div>
  );
}
