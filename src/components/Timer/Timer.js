import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: 30,
    seconds: 0
  };

  /**
   * starts the timer
   */
  StartTimer = () => {
    this.interval = setInterval(() => {
      const { minutes, seconds } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.interval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  };
  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <button onClick={this.StartTimer}>Start</button>
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
