// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
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

    handleClick = (e) => {
        this.setState( {
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, ()=> console.log(this.state)
        )
    }
    handleClick2 = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        }, ()=> console.log(this.state)
        )
    }
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClick}>Change</button>
                <button className='resolution' onClick={this.handleClick2}>Change2</button>
            </div>
        )
    }
}
