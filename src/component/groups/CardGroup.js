import React, { Component } from 'react';
import OneImage from './OneImage';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class CardGroup extends Component {
  state={
    redirect : false
  }
  groupEntry = () => {
    this.setState({redirect: true});
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/group-entry" />;
    }
    const srcpath =(this.props.item.iconserver === "0")?(
        require(`../../static/default/default_group.png`)
      ):
      (
        "https://farm"+this.props.item.iconfarm+ ".staticflickr.com/"+this.props.item.iconserver+"/buddyicons/"+this.props.item.id+".jpg"
      )
    
    return (
      <div className="card_group col-sm-6" onClick={this.props.groupEntry}>
        <div className="abcd">
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
    groups: state.groups
  }
}

export default connect(mapStateToProps)(CardGroup);