import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Redirect } from "react-router-dom";
class HomePage extends Component {
  state = {
    firstTeam: "",
    secondTeam: "",
    isAddedToStorage: false,
    date: JSON.stringify(new Date())
  };
  getTeamA = e => {
    let { value } = e.target;
    this.setState({
      firstTeam: value
    });
  };

  getTeamB = e => {
    let { value } = e.target;
    this.setState({
      secondTeam: value
    });
  };

  AddToStorage = e => {
    e.preventDefault();
    const TeamInfo = {
      firstTeam: this.state.firstTeam,
      secondTeam: this.state.secondTeam
    };
    localStorage.setItem("Teams", JSON.stringify(TeamInfo));
    this.setState({
      isAddedToStorage: true
    });
  };
  render() {
    return (
      <div>
        {/* redirecting to start game */}
        {this.state.isAddedToStorage ? <Redirect to="/StartGame" /> : null}
        <Navigation />

        <form>
          <input type="text" placeholder="team A" onChange={this.getTeamA} />
          <input type="text" placeholder="team B" onChange={this.getTeamB} />
          <button onClick={this.AddToStorage}>Add</button>
        </form>
      </div>
    );
  }
}

export default HomePage;
