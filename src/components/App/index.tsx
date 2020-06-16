import React from "react";

import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../LayoutLanding";
import ModelDropZone from "../ModelDropZone";
import useModel from "../../hooks/useModel";
import { createTheme } from "../../theme";

function App() {
  const { openInpFile } = useModel()!;

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <ModelDropZone onDroppedInpFile={openInpFile}>
        <Layout />
      </ModelDropZone>
    </ThemeProvider>
  );
}

export default App;
