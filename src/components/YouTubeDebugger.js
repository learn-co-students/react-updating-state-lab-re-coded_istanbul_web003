// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor () {
        super ();

        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
                }
            }

        };
    }

    handleChangeB = () => {
        this.setState ({
            settings: {
                ...this.state.settings,
                bitrate : 12
            }
        });
    };

  handleChangesR = () => {
      this.setState ({
        settings: {
              ...this.state.settings,

              video: {
                  ...this.state.settings.video, 
                  resolution: "720p"
              }
          }
      })
  };

render () {
    return (
        <div>
            <button className= "bitrate" onClick = {this.handleChangeB}> Change Bit Rate </button>
            <button className= "resolution" onClick = {this.handleChangesR}> Change Resoultaion </button>
        </div>
    );
}
};

export default YouTubeDebugger;
