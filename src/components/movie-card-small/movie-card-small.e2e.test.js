import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardSmall from "./movie-card-small";

Enzyme.configure({adapter: new Adapter()});

const id = 1;
const imagePath = `imagePath`;
const title = `title`;
const onMouseOver = jest.fn();
const onMouseOut = jest.fn();
const onPlayClick = jest.fn();

it(`should call the onPlayClick when user clicks a play button`, () => {
  const movieCardSmall = shallow(
      <MovieCardSmall
        id={id}
        imagePath={imagePath}
        title={title}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onPlayClick={onPlayClick}
      />
  );

  const playButton = movieCardSmall.find(`.small-movie-card__play-btn`);
  playButton.simulate(`click`, {preventDefault() {}});
  expect(onPlayClick).toHaveBeenCalledTimes(1);
});
