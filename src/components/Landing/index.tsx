import React, { FunctionComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import SelectProjection from "../SelectProjection";
import Button from "@material-ui/core/Button";
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import "./index.css";

const styles = (theme: Theme) =>
  createStyles({
    button: {
      //margin: theme.spacing.unit 
    },
    input: {
      display: "none"
    }
  });

interface LandingProperties extends WithStyles<typeof styles> {
  isLoading: boolean;
  isFileLoaded: boolean;
  onSelectProj: (proj: string) => void;
  onLoadDemo: () => void;
}

const Landing: FunctionComponent<LandingProperties> = ({
  isLoading,
  isFileLoaded,
  onSelectProj,
  onLoadDemo,
  classes
}) => {
  return (
    <div className="flex-grid">
      <div className="col1">
        <h3>Matrado</h3>
        <h1>Model View</h1>

        {isFileLoaded ? (
          <SelectProjection onSelectProj={onSelectProj} />
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <p className="subtitle">Share and view models in the browser</p>
            <p className="blurb"></p>
            <p className="blurb">View EPANET watermodels online.</p>
            <p className="blurb">
              Model View is under active development, this version is an early
              preview. This application and its source code is free and open
              source under AGPLv3. Feature requests and issues can be logged on
              GitHub, contact me on{" "}
              <a href="https://www.linkedin.com/in/lukepbutler/">LinkedIn</a> or
              email - luke@matrado.ca
            </p>

            <div className="droparea">
              <p>Drop EPANET .inp file here</p>
              <p className="blurb">
                All data is proccessed client side, no model data sent to the
                server.
              </p>
              <Button
                className={classes.button}
                color="secondary"
                onClick={onLoadDemo}
              >
                Load Demo Model
              </Button>
            </div>
            <div className="btns-float-left">
              <Button
                className={classes.button}
                variant="contained"
                href="https://github.com/modelcreate/model-view/"
              >
                Github
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="col2"></div>
    </div>
  );
};

export default withStyles(styles)(Landing);
