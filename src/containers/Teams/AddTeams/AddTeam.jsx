import React, { Component } from "react";

class AddTeam extends Component {
  state = {
    name: ""
  };
  handleTeamInput = e => {
    this.setState({
      name: e.target.value
    });
  };
  submitTeam = e => {
    e.preventDefault();
    this.props.AddTeam(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleTeamInput}
            value={this.state.name}
          />
          <button onClick={this.submitTeam}>Add team</button>
        </form>
      </div>
    );
  }
}

export default AddTeam;
