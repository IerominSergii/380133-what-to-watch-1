import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardSmall from "../movie-card-small/movie-card-small.jsx";

class CatalogMoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieId: 0
    };
    this.mouseOverHandle = this.mouseOverHandle.bind(this);
    this.mouseOutHandle = this.mouseOutHandle.bind(this);
  }

  setActiveMovie(movieId) {
    this.setState({activeMovieId: +movieId});
  }

  removeActiveMovie() {
    this.setState({activeMovieId: 0});
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

  render() {
    const {films} = this.props;
    const {activeMovieId} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCardSmall
              key={film.id}
              src={film.src}
              id={film.id}
              imagePath={film.imagePath}
              title={film.title}
              activeMovieId={activeMovieId}
              onMouseOver={this.mouseOverHandle}
              onMouseOut={this.mouseOutHandle}
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
