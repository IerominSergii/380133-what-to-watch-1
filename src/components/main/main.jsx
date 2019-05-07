import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const {names} = props;
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">
              All genres
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Comedies
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Crime
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Documentary
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Dramas
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Horror
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Kids & Family
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Romance
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Sci-Fi
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Thrillers
            </a>
          </li>
        </ul>

        <div className="catalog__movies-list">
          {names.map((movie, index) => {
            return (
              <article
                key={movie + index}
                className="small-movie-card catalog__movies-card"
              >
                <button className="small-movie-card__play-btn" type="button">
                  Play
                </button>
                <div className="small-movie-card__image">
                  <img
                    src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                    alt="Fantastic Beasts: The Crimes of Grindelwald"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">
                    {movie}
                  </a>
                </h3>
              </article>
            );
          })}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;

Main.propTypes = {
  names: PropTypes.array.isRequired
};
