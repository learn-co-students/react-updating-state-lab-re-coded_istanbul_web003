// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super();

    this.state = {
      timesClicked: 0,
    };
  }
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    });
  };

  render() {
    return (
      <button type="button" label="timesClicked" onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    );
  }
}
