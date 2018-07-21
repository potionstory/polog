import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PologPage from '../page/PologPage';
import AboutPage from '../page/AboutPage';
import LogPage from '../page/LogPage';
import SearchPage from '../page/SearchPage';
import SettingPage from '../page/SettingPage';
import LoginPage from '../page/LoginPage';
import JoinPage from '../page/JoinPage';
import { ResetStyle } from '../style/Reset';

class App extends Component {
  componentDidMount() {
    ResetStyle();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/polog" component={ PologPage } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/log" component={ LogPage } />
            <Route path="/search" component={ SearchPage } />
            <Route path="/setting" component={ SettingPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/join" component={ JoinPage } />
            <Redirect to="/polog" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
