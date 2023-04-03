import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchResult.scss";

const SearchResult = (props) => {
  const { searchData, getMovieData } = props;

  if (!searchData || searchData.Response === "False") {
    return (
      <section id="search_result">
        <h1>Search Result</h1>
        <p>{searchData.Error}</p>
      </section>
    );
  }

  const movieList = searchData.Search.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} getMovieData={getMovieData} />
  ));

  return (
    <section id="search_result">
      <h1>Search Result</h1>
      <div className="result_list_container">{movieList}</div>
    </section>
  );
};

export default SearchResult;

