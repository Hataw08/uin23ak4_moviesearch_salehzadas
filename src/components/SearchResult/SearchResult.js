import axios from "axios";
import { useState, useEffect } from "react";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import SearchForm from "../components/SearchBox/SearchBox";
import SearchResult from "../components/SearchResult/SearchResult";
import "./SearchPage.scss";

const API_KEY = "722738d3";
const BASE_URL = "http://www.omdbapi.com/";

const SearchPage = () => {
  const [searchData, setSearchData] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [isShowPopup, setIsShow] = useState(false);

  useEffect(() => {
    callApiInitialMovie();
  }, []);

  const callApiInitialMovie = () => {
    axios
      .get(`${BASE_URL}?apikey=${API_KEY}&s=James+Bond&type=movie`)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchKeyWord = (data) => {
    axios
      .get(`${BASE_URL}?apikey=${API_KEY}&s=${data}&type=movie`)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMovieData = (data) => {
    if (data.imdbID === movieDescription.imdbID) {
      setIsShow(false);
      setMovieDescription("");
      return;
    }

    axios
      .get(`${BASE_URL}?apikey=${API_KEY}&i=${data.imdbID}&type=movie`)
      .then((response) => {
        setMovieDescription(response.data);
        setIsShow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setIsShow(false);
  };

  return (
    <main id="search">
      <SearchForm getSearchKeyWord={getSearchKeyWord} />
      <SearchResult searchData={searchData} getMovieData={getMovieData} />
      <MovieDescription
        isShowPopup={isShowPopup}
        movieDescription={movieDescription}
        closeModal={closeModal}
      />
    </main>
  );
};

export default SearchPage;
