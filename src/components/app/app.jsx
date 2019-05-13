import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {films, onClick} = props;
  return <Main films={films} onClick={onClick} />;
};

export default App;

App.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func
};
