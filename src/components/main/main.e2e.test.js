import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({adapter: new Adapter()});
const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const clickHandler = jest.fn();
const main = shallow(<Main names={names} onClick={clickHandler} />);
const cardTitle = main.find(`.movie-card__title`);

describe(`Enxyme App:`, () => {
  it(`should contain the title`, () => {
    expect(cardTitle).toHaveLength(1);
  });

  it(`should render App correctly`, () => {
    cardTitle.simulate(`click`, {preventDefault() {}});

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
