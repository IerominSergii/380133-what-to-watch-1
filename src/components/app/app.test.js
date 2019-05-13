import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {films} from "../../mocks/films";

describe(`App snapshot:`, () => {
  it(`should render App correctly`, () => {
    const onClick = jest.fn();
    const app = renderer
      .create(<App films={films} onClick={onClick} />)
      .toJSON();

    expect(app).toMatchSnapshot();
  });
});
