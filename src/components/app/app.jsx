import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  return <Main names={props.movieNames} />;
};

export default App;

App.propTypes = {
  movieNames: PropTypes.array
};
