import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
    background: "#1e1e1e",
  },
  appContainer: {
    paddingLeft: drawerWidth,
    height: "100vh",
  },
}));

function LayoutModel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        elevation={16}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <h1>Temp</h1>
      </Drawer>
      <Container
        className={classes.appContainer}
        maxWidth={false}
        disableGutters
      >
        <h2>Temp2</h2>
      </Container>
    </React.Fragment>
  );
}

export default LayoutModel;
