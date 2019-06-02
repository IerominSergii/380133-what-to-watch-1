import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.playerTimeout = null;
    this.playerDelay = 1000;
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    clearTimeout(this.playerTimeout);

    if (prevProps.isPlaying !== this.props.isPlaying) {
      if (this.props.isPlaying) {
        this.playerTimeout = setTimeout(() => {
          video.play();
        }, this.playerDelay);
      } else {
        video.pause();
        video.load();
      }
    }
  }

  componentWillUnmount() {
    this._videoRef.current.src = ``;
  }

  render() {
    return (
      <video
        className="small-movie-card__video"
        ref={this._videoRef}
        width="280"
        height="175"
        poster={`img/${this.props.posterSrc}`}
        muted
      >
        <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  posterSrc: PropTypes.string
};
