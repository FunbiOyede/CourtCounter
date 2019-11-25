import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Timer extends Component {
  state = {
    minutes: 30,
    seconds: 0
  };

  /**
   * This function is responsible for the timer
   */
  StartTimer = () => {
    const interval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1
        });
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(interval);
        } else {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59
          });
        }
      }
    }, 1000);
  };

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.StartTimer}
          style={{
            background: "white",
            color: "#3f51b5",
            margin: "10px"
          }}
        >
          Start
        </Button>

        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
