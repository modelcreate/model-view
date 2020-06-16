import React from "react";

import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../LayoutLanding";
import { createTheme } from "../../theme";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
