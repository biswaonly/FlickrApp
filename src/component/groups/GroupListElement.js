import React, { Component } from 'react';
import { connect } from 'react-redux';

class GroupListElement extends Component {
  render() {
    return (
			<div className="group_list_name">
				<h5>{this.props.item.name}</h5>
				<div className="space"></div>
				<p>about group</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    groups : state.groups
  }
}

export default connect(mapStateToProps)(GroupListElement);