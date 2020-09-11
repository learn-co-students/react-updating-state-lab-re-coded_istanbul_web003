// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }
  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };
  handleClickTwo = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p",
        },
      },
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick} className="bitrate">
            {this.state.settings.bitrate}
          </button>
        </div>
        <div>
          <button onClick={this.handleClickTwo} className="resolution">
            {this.state.settings.video.resolution}
          </button>
        </div>
      </div>
    );
  }
}
