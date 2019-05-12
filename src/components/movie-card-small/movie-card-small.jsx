import React from "react";
import {PropTypes} from "prop-types";

const MovieCardSmall = (props) => {
  const {
    id,
    imagePath,
    title,
    onMouseOver: mouseOverHandler,
    onMouseOut: mouseOutHandler,
    onPlayClick
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <button
        className="small-movie-card__play-btn"
        type="button"
        onClick={onPlayClick}
      >
        Play
      </button>
      <div className="small-movie-card__image">
        <img src={`img/${imagePath}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

export default MovieCardSmall;

MovieCardSmall.propTypes = {
  id: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onPlayClick: PropTypes.func
};
