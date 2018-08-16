import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./container/App";
import store from "./store";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Spoqa Han Sans"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" component={App} />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
export default Root;
