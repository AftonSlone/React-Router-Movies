import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { addToSavedList } = props;
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieCard
          addToSavedList={addToSavedList}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}
