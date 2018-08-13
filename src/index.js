import React from "react";
import ReactDOM from "react-dom";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Root from "./Root";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>,
  document.getElementById("root")
);
