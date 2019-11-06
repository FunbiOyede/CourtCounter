import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FirstTeam from "../Teams/FirstTeam";
import SecondTeam from "../Teams/SecondTeam";
import Timer from "../../components/Timer/Timer";
import * as ActionCreators from "../../Store/Actions/ActionsCreators";
import { connect } from "react-redux";

class StartGame extends Component {
  componentDidMount() {
    this.props.FetchTeamsNames();
  }

  render() {
    return (
      <div>
        <Navigation />
        <FirstTeam team={this.props.Teams.firstTeamName} />
        <SecondTeam team={this.props.Teams.secondTeamName} />
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Teams: state.teams
  };
};

const dispatchStateToProps = dispatch => {
  return {
    FetchTeamsNames: () => dispatch(ActionCreators.fetchTeams())
  };
};
export default connect(
  mapStateToProps,
  dispatchStateToProps
)(StartGame);
