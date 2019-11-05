import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import {
  getFirstTeamName,
  saveTeamName,
  getSecondTeamName
} from "../../Store/Actions/ActionsCreators";

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
        {this.props.isPosted ? <Redirect to="/StartGame" /> : null}
        <Navigation />

        <form>
          <input
            type="text"
            placeholder="team A"
            onChange={e => this.props.getFirstTeamName(e.target.value)}
          />
          <input
            type="text"
            placeholder="team B"
            onChange={e => this.props.getSecondTeamName(e.target.value)}
          />
        </form>
        <button
          onClick={() =>
            this.props.saveTeamName(
              this.props.FirstTeamName,
              this.props.SecondTeamName
            )
          }
        >
          Add
        </button>
        <div>
          <div>
            {this.props.isError ? (
              <p style={{ color: "red" }}>
                unable to save data. Connect to the internet
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    FirstTeamName: state.firstTeamName,
    SecondTeamName: state.secondTeamName,
    isPosted: state.isPosted,
    isError: state.isError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFirstTeamName: value => dispatch(getFirstTeamName(value)),
    getSecondTeamName: value => dispatch(getSecondTeamName(value)),
    saveTeamName: (fname, sname) => dispatch(saveTeamName(fname, sname))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
