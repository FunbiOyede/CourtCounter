import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
class FirstTeam extends Component {
  state = {
    score: 0
  };
  ThreePointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 3
    });
  };

  TwoPointer = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 2
    });
  };
  FreeThrow = e => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 1
    });
  };

  Reset = e => {
    e.preventDefault();
    this.setState({
      score: 0
    });
  };

  render() {
    return (
      <div>
        <Grid xs={12} style={{ margin: "30px" }}>
          <Card style={{ background: "#3f51b5", color: "#fff" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white"
                  }}
                >
                  {this.props.team}
                </Typography>
                <div
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    color: "#fff"
                  }}
                >
                  {this.state.score}
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.ThreePointer}
                    style={{
                      background: "white",
                      color: "#3f51b5",
                      margin: "10px"
                    }}
                  >
                    +3 Points
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      background: "white",
                      color: "#3f51b5",
                      margin: "10px"
                    }}
                    color="primary"
                    onClick={this.TwoPointer}
                  >
                    +2 Points
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      background: "white",
                      color: "#3f51b5",
                      margin: "10px"
                    }}
                    color="primary"
                    onClick={this.FreeThrow}
                  >
                    Free Throw
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      margin: "10px"
                    }}
                    color="secondary"
                    onClick={this.Reset}
                  >
                    Reset
                  </Button>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

FirstTeam.propTypes = {
  team: PropTypes.string
};

export default FirstTeam;
