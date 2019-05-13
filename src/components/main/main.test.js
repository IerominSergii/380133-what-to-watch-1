import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {films} from "../../mocks/films";

describe(`Main snapshot`, () => {
  it(`should render App correctly`, () => {
    const onClick = jest.fn();

    const main = renderer
      .create(<Main films={films} onClick={onClick} />)
      .toJSON();

    expect(main).toMatchSnapshot();
  });
});
