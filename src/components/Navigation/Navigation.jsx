import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Navigation = props => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Court Counter</Typography>
        <Link to="/StartGame">Begin</Link>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navigation;
