import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  largePadding: {
    paddingTop: "55px",
  },
  smallPadding: {
    paddingTop: "15px",
  },
  matrado: {
    fontSize: "2.6rem",
    fontWeight: 700,
    margin: "0 0 -10px 3px",
    transition: "0.1s padding ease-out",
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
}));

type TitleProps = {
  topPadding: boolean;
};

function Title({ topPadding }: TitleProps) {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={clsx(
          classes.matrado,
          topPadding ? classes.largePadding : classes.smallPadding
        )}
        component="p"
      >
        Matrado
      </Typography>
      <Typography className={classes.title} variant="h1">
        Model View
      </Typography>
      <Typography className={classes.subtitle} component="h2" gutterBottom>
        Share and view EPANET models online
      </Typography>
    </>
  );
}

export default Title;
