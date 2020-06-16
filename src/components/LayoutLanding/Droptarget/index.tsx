import React from "react";
import Typography from "@material-ui/core/Typography";

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
}));

function Droptarget() {
  const classes = useStyles();

  const test = () => {
    console.log("clicked");
  };

  return (
    <div className={classes.droparea} onClick={test}>
      <Typography variant="body1" gutterBottom>
        Drop INP file here or click to choose a file.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Models are ran locally and no data is uploaded to the server.
      </Typography>
    </div>
  );
}

export default Droptarget;
