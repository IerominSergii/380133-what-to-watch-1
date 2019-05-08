import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`App snapshot:`, () => {
  it(`should render App correctly`, () => {
    const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
    const app = renderer.create(<App movieNames={movieNames} />).toJSON();

    expect(app).toMatchSnapshot();
  });
});
