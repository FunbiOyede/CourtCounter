import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

class StartGame extends Component {
  state = {};
  fetchTeams = () => {
    let { firstTeam, secondTeam } = JSON.parse(localStorage.getItem("Teams"));
    this.setState({
      TeamA: firstTeam,
      TeamB: secondTeam
    });
  };
  componentDidMount() {
    this.fetchTeams();
  }
  render() {
    return (
      <div>
        <Navigation />
        <div>{this.state.TeamA}</div>
        <div>{this.state.TeamB}</div>
      </div>
    );
  }
}

export default StartGame;
