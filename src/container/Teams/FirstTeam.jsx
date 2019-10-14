import React, { Component } from "react";

import { connect } from "react-redux";

class FirstTeam extends Component {
  // all method performing comes from redux
  render() {
    return (
      <div>
        <div>
          <h2>Home:{this.props.team}</h2>
          <div>{this.props.score}</div>
          <div>
            <button onClick={this.props.ThreePointer}>+3 Points</button>
            <button onClick={this.props.TwoPointer}>+2 Points</button>
            <button onClick={this.props.FreeThrow}>Free Throw</button>
          </div>
        </div>
      </div>
    );
  }
}

// state coming from reducer.js file
const storeState = state => {
  return {
    score: state.first.firstTeamScore
  };
};

const dispatcher = dispatch => {
  return {
    ThreePointer: () => dispatch({ type: "THREE_POINTS" }),
    TwoPointer: () => dispatch({ type: "TWO_POINTS" }),
    FreeThrow: () => dispatch({ type: "FREE_THROW" })
  };
};
export default connect(
  storeState,
  dispatcher
)(FirstTeam);
