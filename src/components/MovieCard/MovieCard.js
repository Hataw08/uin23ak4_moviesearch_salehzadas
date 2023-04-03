import React, { useCallback } from "react";
import "./MovieCard.scss";

function MovieCard(props) {
  const { movie, getMovieData } = props;

  const handleClick = useCallback(() => {
    getMovieData(movie);
  }, [getMovieData, movie]);

  return (
    <div onClick={handleClick} className="result_item_poster">
      {movie.Poster === "N/A" ? (
        <div className="image_info">No image</div>
      ) : (
        <div
          className="image_info"
          style={{
            backgroundImage: `url(${movie.Poster})`,
          }}
        ></div>
      )}
      <button onClick={handleClick} className="btn_info">
        Movie Info
      </button>
    </div>
  );
}

export default React.memo(MovieCard);
