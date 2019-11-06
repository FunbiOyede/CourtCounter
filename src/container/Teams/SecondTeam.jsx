import React, { Component } from "react";
import PropTypes from "prop-types";
class SecondTeam extends Component {
  state = {
    score: 0,
    scores: []
  };
  ThreePointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 3
    });
    this.SaveToStorage(this.state.score);
  };

  TwoPointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 2
    });
    this.SaveToStorage(this.state.score);
  };
  FreeThrow = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 1
    });
    this.SaveToStorage(this.state.score);
  };
  SaveToStorage = score => {
    const newScore = [...this.state.scores, score];
    this.setState({
      scores: newScore
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>VISITOR:{this.props.team}</h2>
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

SecondTeam.propTypes = {
  team: PropTypes.string
};
export default SecondTeam;
