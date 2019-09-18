import React, { Component } from "react";

import AddTeam from "./AddTeams/AddTeam";
import DisplayTeam from "../Teams/DisplayTeams/DisplayTeam";
class Teams extends Component {
  state = {
    teams: []
  };
  AddTeam = value => {
    this.setState({
      teams: [...this.state.teams, value.name]
    });
  };

  render() {
    return (
      <div>
        <AddTeam AddTeam={this.AddTeam} />
        <div>
          <DisplayTeam Teams={this.state.teams} />
        </div>
        <div>
          <button>Start Game</button>
        </div>
      </div>
    );
  }
}

export default Teams;
