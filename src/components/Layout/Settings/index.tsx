import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import SelectProjection from "../../SelectProjection";

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

function Settings() {
  const classes = useStyles();

  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Settings Tab
      </Typography>
      <Typography variant="body1" gutterBottom>
        {value}
      </Typography>
      <SelectProjection onSelectProj={setValue} />
    </>
  );
}

export default Settings;
