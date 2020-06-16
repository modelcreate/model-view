import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  matrado: {
    fontSize: "2.6rem",
    fontWeight: 700,

    paddingTop: "55px",
    margin: "0 0 -10px 3px",
  },
  title: {
    fontSize: "7rem",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "1.8rem",
    marginTop: "-6px",
    marginLeft: "4px",
  },
  blurb: {
    color: "rgb(110, 110, 110)",
    marginLeft: "5px",
  },
}));

function Title() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.matrado} component="p">
        Matrado
      </Typography>
      <Typography className={classes.title} variant="h1">
        Model View
      </Typography>
      <Typography className={classes.subtitle} component="h2" gutterBottom>
        Share and view EPANET models online
      </Typography>
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
    </>
  );
}

export default Title;
