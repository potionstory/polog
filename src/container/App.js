import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ResetStyle } from '../style/Reset';

class App extends Component {
  componentDidMount() {
    ResetStyle();
  }

  render() {
    return (
      <Fragment>
        AppTest
      </Fragment>
    );
  }
}

export default App;
