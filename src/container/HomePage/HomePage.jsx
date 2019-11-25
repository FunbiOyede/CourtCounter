import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import classes from "./HomePage.module.css";
import {
  getFirstTeamName,
  saveTeamName,
  getSecondTeamName
} from "../../Store/Actions/ActionsCreators";

class HomePage extends Component {
  render() {
    let RedirectToStartGame = (
      <div>
        <Navigation />

        <Container maxWidth="sm" style={{ marginTop: "7%" }}>
          <form>
            <TextField
              style={{ margin: 8 }}
              type="text"
              placeholder="team A"
              onChange={e => this.props.getFirstTeamName(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
            />
          </form>
          <button
            className={classes.saveTeams}
            onClick={() =>
              this.props.saveTeamName(
                this.props.FirstTeamName,
                this.props.SecondTeamName
              )
            }
          >
            Add
          </button>

          <TextField
            style={{ margin: 8 }}
            type="text"
            placeholder="team B"
            onChange={e => this.props.getSecondTeamName(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />

          <div>
            <div>
              {this.props.isError ? (
                <p style={{ color: "red", textAlign: "center" }}>
                  unable to save data. Connect to the internet
                </p>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    );
    if (this.props.isPosted) {
      RedirectToStartGame = <Redirect to="/StartGame" />;
    }
    return RedirectToStartGame;
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
