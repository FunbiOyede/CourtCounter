import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FirstTeam from "../Teams/FirstTeam";
import SecondTeam from "../Teams/SecondTeam";
import Timer from "../../components/Timer/Timer";
import * as ActionCreators from "../../Store/Actions/ActionsCreators";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

class StartGame extends Component {
  state = {
    isLoad: true
  };
  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({
        isLoad: false
      });
    }, 2000);
  }

  componentDidMount() {
    this.props.FetchTeamsNames();
  }

  render() {
    let loader = null;
    if (this.state.isLoad === true) {
      loader = <Loader />;
    } else {
      loader = (
        <div>
          <div>
            {this.props.isFetch ? (
              <p style={{ color: "red", textAlign: "center" }}>
                Unable to fetch team names. Please connect to the internet
              </p>
            ) : null}
          </div>
          <FirstTeam team={this.props.Teams.firstTeamName} />
          {/* <Timer /> */}
          <SecondTeam team={this.props.Teams.secondTeamName} />
        </div>
      );
    }
    return (
      <div>
        <Navigation />
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          {loader}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Teams: state.teams,
    isFetch: state.isFetch
  };
};

const dispatchStateToProps = dispatch => {
  return {
    FetchTeamsNames: () => dispatch(ActionCreators.fetchTeams())
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(StartGame);
