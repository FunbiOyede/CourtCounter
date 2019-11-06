import React, { Component } from "react";
import PropTypes from "prop-types";
class FirstTeam extends Component {
  state = {
    score: 0,
    constantScore: 10
  };
  ThreePointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 3
    });
  };

  TwoPointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 2
    });
  };
  FreeThrow = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 1
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Home:{this.props.team}</h2>
          <div>{this.state.score}</div>
          <div>
            <button onClick={this.ThreePointer}>+3 Points</button>
            <button onClick={this.TwoPointer}>+2 Points</button>
            <button onClick={this.FreeThrow}>Free Throw</button>
          </div>
        </div>
      </div>
    );
  }
}

FirstTeam.propTypes = {
  team: PropTypes.string
};

export default FirstTeam;
