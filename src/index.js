import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films";

const playMovie = () => {};

const init = () => {
  ReactDOM.render(
      <App films={films} onClick={playMovie} />,
      document.querySelector(`#root`)
  );
};

init();
