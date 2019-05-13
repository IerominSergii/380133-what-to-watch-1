import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {films} from "../../mocks/films";

Enzyme.configure({adapter: new Adapter()});
const onClick = jest.fn();

const main = shallow(<Main films={films} onClick={onClick} />);
const cardTitle = main.find(`.movie-card__title`);

describe(`Enzyme App:`, () => {
  it(`should contain the title`, () => {
    expect(cardTitle).toHaveLength(1);
  });

  it(`should render App correctly`, () => {
    cardTitle.simulate(`click`, {preventDefault() {}});

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
