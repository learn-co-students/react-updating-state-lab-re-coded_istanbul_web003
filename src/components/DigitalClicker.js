// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  // why is it not working when it's not an arrow function
  handleClick = () => {
    this.setState({timesClicked: this.state.timesClicked+1})
  }

  render() {
    return (
    <button
    onClick = {this.handleClick}
    >{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker 