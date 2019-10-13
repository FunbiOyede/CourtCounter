import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FirstTeam from "../Teams/FirstTeam";
import SecondTeam from "../Teams/SecondTeam";
import WithControls from "../../components/HOC/WithControls";
import Controls from "../GameControls/Control";
import Timer from "../TimeKeeper/Timer";
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
          <WithControls>
            <div>{/* <Timer /> */}</div>
            <Controls />
          </WithControls>
        </div>
      </div>
    );
  }
}

export default StartGame;
