import React, { Component } from 'react';
import Groups from './component/groups/Groups';
import './App.css';
import Header from './component/header/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Groups />
      </div>
    );
  }
}

export default App;