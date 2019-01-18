import React, { Component } from 'react';
import GroupListElement from './GroupListElement';
import { connect } from 'react-redux';

class GroupList extends Component {
  render() {
    return (
      <div className="col-sm-3 group_list">
				<h3>Groups</h3>
				{this.props.groups && this.props.groups.map((item)=>{
					return <GroupListElement key={item.id} item={item}/>
				})}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    groups : state.groups
  }
}

export default connect(mapStateToProps)(GroupList);