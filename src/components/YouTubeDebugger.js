import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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

    setBitrate = () => {
        this.setState((prevState) => {
            return {
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        }, console.log(this.state))
    }

    setResolution = () => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings, 
                    video: {
                        ...prevState.settings.video,
                        resolution: '720p'
                    }
                }
            }
        })
    }



    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.setBitrate}>bitrate {this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.setResolution}>resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
