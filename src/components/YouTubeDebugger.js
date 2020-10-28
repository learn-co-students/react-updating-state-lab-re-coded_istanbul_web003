// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }


	handleClickOnBitrate = () => {

		this.setState( {
				settings: {
					...this.state.settings,
					bitrate: 12
				}
			}
		)
	}

	handleClickOnResolution = () => {
		this.setState ({
			settings: {
				...this.state.settings,
				video: {
          resolution: '720p'
        }
			}
		})
	}
  render() {
		console.log(this.state);
    return (
			<React.Fragment>
      <button className = "bitrate" onClick = {this.handleClickOnBitrate}>bitrate</button>
			<button
			className = "resolution"
			onClick = {this.handleClickOnResolution}
			>resolution</button>
			</React.Fragment>
    )
  }

}


export default YouTubeDebugger