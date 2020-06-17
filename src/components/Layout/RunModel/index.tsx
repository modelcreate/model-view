import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
}));

function RunModel() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Run Model Tab
      </Typography>
    </>
  );
}

export default RunModel;
