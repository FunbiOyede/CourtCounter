import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FirstTeam from "../Teams/FirstTeam";
import SecondTeam from "../Teams/SecondTeam";
import Timer from "../../components/Timer/Timer";
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
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

export default StartGame;
