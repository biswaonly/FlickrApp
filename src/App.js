import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import { withRouter } from "react-router-dom";
import AppRoute from './router/index'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <AppRoute />
      </div>
    );
  }
}

export default withRouter(App);