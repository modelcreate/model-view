import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Actions() {
  const classes = useStyles();
  return (
    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        href="https://github.com/modelcreate/model-view/"
      >
        Load Demo Model
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        href="https://github.com/modelcreate/model-view/"
      >
        Github
      </Button>
    </Grid>
  );
}

export default Actions;
