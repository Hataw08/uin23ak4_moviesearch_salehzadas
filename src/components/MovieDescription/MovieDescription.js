import React from "react";
import "./MovieDescription.scss";

export default function MovieDescription(props) {
  const { isShowPopup, movieDescription, closeModal } = props;

  return (
    isShowPopup && (
      <section id="movie_description">
        <div className="content">
          {movieDescription.Title && (
            <>
              <h1 className="content_title">{movieDescription.Title}</h1>
              <hr />
            </>
          )}

          <h3 className="content_director">
            Director : {movieDescription.Director || ""}
          </h3>
          <h3 className="content_genre">
            Genre : {movieDescription.Genre || ""}
          </h3>
          <h3 className="content_release">
            Release Date : {movieDescription.Released || ""}
          </h3>
          <h3 className="content_duration">
            Duration : {movieDescription.Runtime || ""}
          </h3>
          <h3 className="content_country">
            Country : {movieDescription.Country || ""}
          </h3>
          <h3 className="content_voted">
            Vote : {movieDescription.imdbRating} 
          </h3>
          <p className="content_description">
            {movieDescription.Plot ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque omnis sint nisi? Facere omnis consequuntur culpa ab accusantium maiores at quidem et sapiente tempora autem"}
          </p>
        </div>

        {movieDescription.Poster && (
          <div className="image">
            <img alt={movieDescription.Title} src={movieDescription.Poster}></img>
          </div>
        )}

        <button className="close_button" onClick={closeModal}>
          X
        </button>
      </section>
    )
  );
}
