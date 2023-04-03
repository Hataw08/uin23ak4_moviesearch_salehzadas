import React from "react";
import ReactDOM from "react-dom";
import SearchPage from "./Pages/SearchPage";


const App = () => {
  return (
    <div className="app">
      <SearchPage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

