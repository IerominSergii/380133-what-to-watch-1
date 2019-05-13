import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmall from "./movie-card-small";

it(`should render MovieCardSmall properly`, () => {
  const id = 1;
  const imagePath = `imagePath`;
  const title = `title`;
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const onPlayClick = jest.fn();

  const movieCardSmall = renderer
    .create(
        <MovieCardSmall
          id={id}
          imagePath={imagePath}
          title={title}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onPlayClick={onPlayClick}
        />
    )
    .toJSON();

  expect(movieCardSmall).toMatchSnapshot();
});
