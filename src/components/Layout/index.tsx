import React from "react";

import Title from "./Title";
import SelectModel from "./SelectModel";
import RunModel from "./RunModel";
import Settings from "./Settings";
import ModelInfo from "./ModelInfo";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import useModel from "../../hooks/useModel";

const drawerWidth = 550;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
    background: "#fafafa",
  },
  appContainer: {
    paddingLeft: drawerWidth,
    height: "100vh",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(/imgs/background.png) no-repeat center right",
    backgroundSize: "cover",
    color: "rgba(0,0,0,.77)",
  },
  sideBarContainer: {
    height: "100vh",
    flexWrap: "unset",
  },
}));

const PANEL_LAYOUT = {
  SELECTMODEL: <SelectModel />,
  SETTINGS: <Settings />,
  RUNNINGMODEL: <RunModel />,
  MODELLOADED: <ModelInfo />,
};

function Layout() {
  const classes = useStyles();

  const { layoutState, setLayoutState } = useModel()!;

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
        <Container className={classes.sideBarContainer} maxWidth={false}>
          <Title topPadding={layoutState === "SELECTMODEL"} />
          {PANEL_LAYOUT[layoutState]}
        </Container>

        <Button
          variant="contained"
          onClick={() => {
            setLayoutState("SELECTMODEL");
          }}
        >
          Select Model
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            setLayoutState("SETTINGS");
          }}
        >
          SETTINGS
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setLayoutState("RUNNINGMODEL");
          }}
        >
          RUNNINGMODEL
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setLayoutState("MODELLOADED");
          }}
        >
          MODELLOADED
        </Button>
      </Drawer>
      <Container
        className={classes.appContainer}
        maxWidth={false}
        disableGutters
      >
        <></>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
