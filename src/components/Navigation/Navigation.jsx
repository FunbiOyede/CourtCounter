import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navigation = props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Court Counter</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navigation;
