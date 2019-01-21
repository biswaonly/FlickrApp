import React, { Component } from 'react';
import { connect } from 'react-redux';
import './groupEntry.css';
import fetchData from '../../fetchData';

class Groups extends Component {


  componentDidMount(){

    fetchData(`https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=`+process.env.REACT_APP_API_KEY+`&group_id=`+this.props.groupInfo.id+`&per_page=80&format=json&nojsoncallback=1`,(error,photos)=>{
      if(error){
        return console.error(error);
      }
      this.props.addImages(photos)
    });
    
    const group = this.props.groups.find(group =>{
                    return group.id===this.props.groupInfo.id;
                  })

    this.props.addSingleGroup( group )
  }

  getImage=()=>{
    console.log(this.props.singleData.iconfarm);

    if(!this.props.singleData || !this.props.singleData.iconfarm){
      return;
    }
    
    return ("https://farm"+this.props.singleData.iconfarm+".staticflickr.com/"+this.props.singleData.iconserver+"/buddyicons/"+this.props.singleData.id+".jpg");
  }

  render() {

    // console.log(this.props);
    
    return (
      <div className="group_entry">
        <div className="group_entry_logo_suporter">
          <img className="group_logo" src={this.getImage} alt={this.props.singleData && this.props.singleData.name}></img>
        </div>
        <div className="group_entry_name">
          <h2>{this.props.singleData && this.props.singleData.name}</h2>
        </div>
        <div className="group_entry_images row">
          
        {this.props.group_images && this.props.group_images.map((photo)=>{
          return(
            <div className="entry_img_show_div col-md-3" key={photo.id}>
              <img className="entry_img" id = {photo.id}
                src={"https://farm"+photo.farm+".staticflickr.com/"+  photo.server+"/"+photo.id+"_"+photo.secret+".jpg"} />
            </div>
          )
        })}


        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return({
    addImages : (abc)=>{
      const action = {type : 'ADD_IMAGES', pass: abc}
      dispatch(action)
    },
    addSingleGroup : (group)=>{
      const action = {type : 'ADD_SINGLE_GROUP', pass: group}
      dispatch(action)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);