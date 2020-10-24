// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0,
        }
    }
    handleClick = (e)=> {
        this.setState(previousState => {
              return {
                  timesClicked: previousState.timesClicked + 1
              };
        })
    }
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
