import React, { Component } from "react";
import PropTypes from "prop-types";
class FirstTeam extends Component {
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

  Reset = e => {
    e.preventDefault();
    this.setState({
      score: 0
    });
  };

  render() {
    return (
      <div>
        <div style={style}>
          <h2>{this.props.team}</h2>
          <div style={{ fontSize: "40px", textAlign: "center" }}>
            {this.state.score}
          </div>
          <div>
            <button onClick={this.ThreePointer}>+3 Points</button>
            <button onClick={this.TwoPointer}>+2 Points</button>
            <button onClick={this.FreeThrow}>Free Throw</button>
            <button onClick={this.Reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

FirstTeam.propTypes = {
  team: PropTypes.string
};

const style = {
  background: "yellow",
  height: "20vh",
  width: "40%",
  margin: "10px 12px",
  padding: "20px",
  float: "left"
};

export default FirstTeam;
