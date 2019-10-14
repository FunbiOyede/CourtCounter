import React, { Component } from "react";
import { connect } from "react-redux";
class SecondTeam extends Component {
  state = {
    score: 0
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
          <h2>VISITOR:{this.props.team}</h2>
          <div>{this.props.score}</div>
          <div>
            <button onClick={this.ThreePointer}>+3 Points</button>
            <button onClick={this.props.TwoPointer}>+2 Points</button>
            <button onClick={this.FreeThrow}>Free Throw</button>
          </div>
        </div>
      </div>
    );
  }
}

// second coming from combining reducer
const storeState = state => {
  return {
    score: state.second.secondTeamScore
  };
};

const dispatcher = dispatch => {
  return {
    TwoPointer: () =>
      dispatch({
        type: "TWO_POINTS"
      })
  };
};
export default connect(
  storeState,
  dispatcher
)(SecondTeam);
