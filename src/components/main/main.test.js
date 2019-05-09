import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

describe(`Main snapshot`, () => {
  it(`should render App correctly`, () => {
    const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
    const main = renderer.create(<Main names={names} />).toJSON();

    expect(main).toMatchSnapshot();
  });
});
