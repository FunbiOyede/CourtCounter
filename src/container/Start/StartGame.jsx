import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FirstTeam from "../Teams/FirstTeam";
import SecondTeam from "../Teams/SecondTeam";

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
        <FirstTeam team={this.state.TeamA} />
        <SecondTeam team={this.state.TeamB} />
      </div>
    );
  }
}

export default StartGame;
