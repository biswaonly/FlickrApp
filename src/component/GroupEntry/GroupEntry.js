import React, { Component } from 'react';
import { connect } from 'react-redux';
import './groupEntry.css';
import fetchData from '../../fetch/fetchData';
import {withRouter} from 'react-router-dom';

class Groups extends Component {


  componentDidMount(){

    const id = (this.props.id)? this.props.id: sessionStorage.getItem("id") ;
    if(!id){
      return this.props.history.push('/');
    }

    if(this.props.id){
      const group = this.props.groups.find(group =>{
        return group.id===this.props.id;
      })

      sessionStorage.setItem("id",group.id);
      sessionStorage.setItem("name",group.name);
      sessionStorage.setItem("iconfarm",group.iconfarm);
      sessionStorage.setItem("iconserver",group.iconserver);
    }
        
    fetchData(`https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=`+process.env.REACT_APP_API_KEY+`&group_id=`+id+`&per_page=80&format=json&nojsoncallback=1`,(error,photos)=>{
      if(error){
        return console.error(error);
      }
      this.props.addImages(photos)
    });
    
    const group = {
      id: sessionStorage.getItem("id"),
      name: sessionStorage.getItem("name"),
      iconfarm: sessionStorage.getItem("iconfarm"),
      iconserver: sessionStorage.getItem("iconserver")
    }

    this.props.addSingleGroup( group );
  }

  getImage=()=>{
    
    if(!this.props.singledata || !this.props.singledata.iconfarm){      
      return null;
    }
    
    return ((this.props.singledata.iconfarm==="0")?
    (require(`../../static/default/default_group.png`))
    :
    ("https://farm"+this.props.singledata.iconfarm+".staticflickr.com/"+this.props.singledata.iconserver+"/buddyicons/"+this.props.singledata.id+".jpg")
    )
  }

  render() {
        
    return (
      <div className="group_entry">
        <div className="group_entry_logo_suporter">
          {this.props.singledata?
          (            
            <img className="group_logo" src={this.getImage()} alt={this.props.singledata && this.props.singledata.name}/>
          ):null}
        </div>
        <div className="group_entry_name">
          <h2>{this.props.singledata && this.props.singledata.name}</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Groups));