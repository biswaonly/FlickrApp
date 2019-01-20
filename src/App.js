import React, { Component } from 'react';
import Groups from './component/groups/Groups';
import './App.css';
import Header from './component/header/Header';
import { Route , withRouter } from "react-router-dom";
import GroupEntry from './component/GroupEntry/GroupEntry';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" Component={Groups}></Route>
        <Route path="/group-entry" component={GroupEntry}></Route> 
      </div>
    );
  }
}

export default withRouter(App);