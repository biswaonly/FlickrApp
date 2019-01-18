import React, { Component } from 'react';
import CardGroup from './CardGroup';
import './groups.css';
import GroupList from './GroupList';
import { connect } from 'react-redux';

class Groups extends Component {
  render() {
    return (
      <div className="row groups">
        <div className="col-sm-8">
          {this.props.groups && this.props.groups.map((item)=>{
            return <CardGroup key={item.id} item={item}/>
          })}
        </div>
        <div className="col-sm-4">
          <GroupList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    groups : state.groups
  }
}

export default connect(mapStateToProps)(Groups);