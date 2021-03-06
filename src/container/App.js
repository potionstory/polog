import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Polog from "../page/Polog";
import Bookmark from "../page/Bookmark";
import Vote from "../page/Vote";
import Search from "../page/Search";
import Status from "../page/Status";
import Help from "../page/Help";
import { ResetStyle } from "../style/Reset";
import { PopStyle } from "../style/Pop";

class App extends Component {
  componentDidMount() {
    ResetStyle();
    PopStyle();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/polog" component={Polog} />
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/vote" component={Vote} />
            <Route path="/search" component={Search} />
            <Route path="/status" component={Status} />
            <Route path="/help" component={Help} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
