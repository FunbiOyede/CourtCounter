import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
class HomePage extends Component {
  state = {
    firstTeam: "",
    secondTeam: ""
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
    localStorage.setItem("Teams", JSON.stringify(this.state));
  };
  render() {
    return (
      <div>
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
