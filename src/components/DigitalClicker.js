import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    count = () => {
        this.setState(prevVal => {
            return {
                timesClicked: prevVal.timesClicked + 1
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.count}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
