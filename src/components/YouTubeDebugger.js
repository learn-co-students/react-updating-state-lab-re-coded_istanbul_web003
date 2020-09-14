// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors:[],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBiterateClick =  () => {
        
         this.setState({
            settings:{
                bitrate: 12,
                video: {
                    resolution: this.state.settings.video.resolution
                }
            }
        })     
        console.log(this.state)
    }

    handleResolutionClick =  () => {
         this.setState({
            settings:{
                bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
        console.log(this.state)
    }

    render() {
        return (
        <div>
            <button className ="bitrate" onClick={this.handleBiterateClick}>bitrate</button>
            <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
        </div>
        )
    }
}