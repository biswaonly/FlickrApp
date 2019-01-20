import React, { Component } from 'react';
import { connect } from 'react-redux';

class Groups extends Component {
  render() {
    return (
      <div>ABCD</div>
    );
  }
}

function mapStateToProps(state){
  return{
    groups : state.groups
  }
}

export default connect(mapStateToProps)(Groups);