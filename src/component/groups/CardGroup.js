import React, { Component } from 'react';
import OneImage from './OneImage';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class CardGroup extends Component {
  cardClick =(e)=>{
    e.preventDefault();
    return this.props.history.push({pathname: '/group-entry', id: this.props.item.id})
  }
  render() {
    
    const srcpath =(this.props.item.iconserver === "0")?(
        require(`../../static/default/default_group.png`)
      ):
      (
        "https://farm"+this.props.item.iconfarm+ ".staticflickr.com/"+this.props.item.iconserver+"/buddyicons/"+this.props.item.id+".jpg"
      )
    
    return (
      <div className="card_group col-sm-6" onClick={this.cardClick}>
        <div className="abcd" >
          <img className="group_logo" src={srcpath} alt={this.props.item.name}></img>
          <div className="group_name">
            <h3>{this.props.item.name}</h3>
          </div>

          <div className="zzz">
            <div className="img_place">
              <OneImage item={this.props.item}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    redirect : state.redirect,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    groupEntry: (abs)=>{
      const action = {type : "YOU_ARE_SELECTED", pass : abs}
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardGroup));