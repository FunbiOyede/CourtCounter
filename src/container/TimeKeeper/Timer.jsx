import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: 10
  };

  render() {
    return (
      <div>
        <div>
          <span>{this.state.minutes}</span>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Timer;
