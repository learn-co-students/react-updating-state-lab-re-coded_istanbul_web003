// Code DigitalClicker Component Here
import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(
      {
        timesClicked: this.state.timesClicked + 1,
      },
     // () => console.log(this.state.timesClicked)
    );
  };

  render() {
    return (
      <div>
        <p>I have {this.state.timesClicked ? this.setState : "not"} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;
