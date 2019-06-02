import React from "react";
import {PropTypes} from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCardSmall = (props) => {
  const {
    id,
    src,
    imagePath,
    title,
    activeMovieId,
    onMouseOver: mouseOverHandler,
    onMouseOut: mouseOutHandler
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={src}
          posterSrc={imagePath}
          isPlaying={activeMovieId === id}
        />
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
  src: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  activeMovieId: PropTypes.number,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};
