import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import { Route , withRouter } from "react-router-dom";
import Groups from './component/groups/Groups';
import GroupEntry from './component/GroupEntry/GroupEntry';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={Groups}></Route>
        <Route path="/group-entry" component={GroupEntry}></Route> 
      </div>
    );
  }
}

export default withRouter(App);