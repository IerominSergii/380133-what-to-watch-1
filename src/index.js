import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

  ReactDOM.render(
      <App movieNames={movieNames} />,
      document.querySelector(`#root`)
  );
};

init();
