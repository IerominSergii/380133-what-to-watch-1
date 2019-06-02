import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmall from "./movie-card-small";

it(`should render MovieCardSmall properly`, () => {
  const id = 1;
  const src = `videoPath`;
  const imagePath = `imagePath`;
  const title = `title`;
  const activeMovieId = 1;
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const movieCardSmall = renderer
    .create(
        <MovieCardSmall
          id={id}
          src={src}
          imagePath={imagePath}
          title={title}
          activeMovieId={activeMovieId}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
    )
    .toJSON();
  console.log(movieCardSmall.debug());

  expect(movieCardSmall).toMatchSnapshot();
});
