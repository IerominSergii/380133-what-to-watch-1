import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardSmall from "./movie-card-small";

Enzyme.configure({adapter: new Adapter()});

const id = 1;
const src = `videoPath`;
const imagePath = `imagePath`;
const title = `title`;
const onMouseOver = jest.fn();
const onMouseOut = jest.fn();

it(`should call the onPlayClick when user clicks a play button`, () => {
  const movieCardSmall = mount(
      <MovieCardSmall
        id={id}
        src={src}
        imagePath={imagePath}
        title={title}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
  );

  const video = movieCardSmall.find(`.small-movie-card__video`);
  video.simulate(`mouseover`);
  expect(onMouseOver).toHaveBeenCalledTimes(1);
});
