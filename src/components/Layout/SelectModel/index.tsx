import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  droparea: {
    cursor: "pointer",
    textAlign: "center",
    padding: "60px",
    border: "2px dashed rgb(145, 145, 145)",
    borderRadius: "15px",
    margin: "30px 50px",
    color: "rgb(110, 110, 110)",
  },
  button: {
    margin: theme.spacing(1),
  },
  blurb: {
    color: "rgb(110, 110, 110)",
    marginLeft: "5px",
  },
}));

function SelectModel() {
  const classes = useStyles();

  const test = () => {
    console.log("clicked");
  };

  return (
    <>
      <Typography className={classes.blurb} variant="body2" gutterBottom>
        This application and open source under AGPLv3.
      </Typography>
      <Typography className={classes.blurb} variant="body2" gutterBottom>
        Feature requests and issues can be logged on{" "}
        <Link
          href="https://github.com/modelcreate/model-view/issues"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        , contact me on{" "}
        <Link
          href="https://www.linkedin.com/in/lukepbutler/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>{" "}
        or by email - luke@matrado.ca
      </Typography>
      <div className={classes.droparea} onClick={test}>
        <Typography variant="body1" gutterBottom>
          Drop INP file here or click to choose a file.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Models are ran locally and no data is uploaded to the server.
        </Typography>
      </div>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
      >
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
    </>
  );
}

export default SelectModel;
