import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardSmall from "../movie-card-small/movie-card-small.jsx";

class CatalogMoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieId: null
    };
    this.mouseOverHandle = this.mouseOverHandle.bind(this);
    this.mouseOutHandle = this.mouseOutHandle.bind(this);
    this.playClickHandler = this.playClickHandler.bind(this);
  }

  setActiveMovie(movieId) {
    this.setState({activeMovieId: +movieId});
  }

  removeActiveMovie() {
    this.setState({activeMovieId: null});
  }

  mouseOverHandle(evt) {
    let target = evt.target;

    while (target.className !== `small-movie-card`) {
      if (target.id) {
        break;
      }
      target = target.parentNode;
    }

    this.setActiveMovie(target.id);
  }

  mouseOutHandle() {
    if (this.state.activeMovieId) {
      this.removeActiveMovie();
    }
  }

  playClickHandler() {
    return this.props.films[this.state.activeMovieId];
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCardSmall
              key={film.id}
              id={film.id}
              imagePath={film.imagePath}
              title={film.title}
              onMouseOver={this.mouseOverHandle}
              onMouseOut={this.mouseOutHandle}
              onPlayClick={this.playClickHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default CatalogMoviesList;

CatalogMoviesList.propTypes = {
  films: PropTypes.array
};
