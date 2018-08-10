import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../page/Home";
import { ResetStyle } from "../style/Reset";

class App extends Component {
  componentDidMount() {
    ResetStyle();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
