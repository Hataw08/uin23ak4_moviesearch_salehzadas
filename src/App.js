import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <SearchPage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
