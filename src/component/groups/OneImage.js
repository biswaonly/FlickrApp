import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPhotos} from '../../fetch/fetchData';

class OneImage extends Component {
  
  onImgLoad=(e) => {
    this.props.addStl({[e.target.id] : (e.target.offsetHeight > e.target.offsetWidth)?true:false})
  }
  componentDidMount(){

    fetchPhotos(`https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=`+process.env.REACT_APP_API_KEY+`&group_id=`+this.props.item.id+`&per_page=8&format=json&nojsoncallback=1`,(error,photos)=>{
      if(error){
        return console.error(error);
      }

      const newPhotos = photos.map((pic)=>{
        return ({
          id:pic.id,
          path: "https://farm"+pic.farm+".staticflickr.com/"+pic.server+"/"+pic.id+"_"+pic.secret+".jpg"
        })        
      })    

      this.props.addToPhotos({[this.props.item.id] : newPhotos})
    });
  }


  render() {
    return (
      <div className="moma">
        {(this.props[this.props.item.id])?this.props[this.props.item.id].map(photo=>{
          return(
            <div className="img_show_div" key={photo.id}>
              <img id = {photo.id} onLoad={this.onImgLoad}
                className = {(this.props[photo.id])? 'img_show_ht' : 'img_show_wt'}
                alt={this.props.item.name}
                src={photo.path} />
            </div>
          )
        }):null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return({
    addToPhotos : (photos)=>{
      const action = {type : 'ADD_PHOTOS', photos:{...photos}}
      dispatch(action)
    },
    addStl : (stl)=>{
      const action = {type : 'ADD_STL', stl:{...stl}}
      dispatch(action)
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(OneImage);