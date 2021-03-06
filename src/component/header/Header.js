import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';
import { Link } from "react-router-dom";
import {fetchGroup} from '../../fetch/fetchData';

class Header extends Component {

  handleChange=(event)=>{

    if(event.target.value){
      fetchGroup(`https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=`+process.env.REACT_APP_API_KEY+`&text=`+event.target.value+`&per_page=10&format=json&nojsoncallback=1`,(error,groups)=>{
        if(error){
          return console.error(error);
        }

        let newGroups= groups.map((group)=>{
          return ({
            id : group.nsid,
            name : group.name,
            iconfarm : group.iconfarm,
            iconserver : group.iconserver
          })
        })
        
        this.props.addGroup({ newGroups });
      });            
    }
    else{
      this.props.addGroup({ newGroups:[] });
    }
  }

  
  render() {
    return (
      <header className="header">
				<nav className="header_nav">

					<div className="header_logo">THE LOGO</div>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>

					<div className="space"></div>
	
					<div className="header_search" style={this.props.wide_search_bar?{width:450,transition: "all ease-in-out 0.3s"}:{width:50,transition: "all ease-in-out 0.3s"}}>
						<div className="header_search_space">
							<div className="search-container">
                <input className={(this.props.wide_search_bar)?"header_search_input_after":"header_search_input"} autoFocus={this.props.wide_search_bar}  style={this.props.wide_search_bar?{display:"inline-block",width:"300px !important"}:{display:"none",width:"0 !important"}} onChange={this.handleChange} type="text" placeholder="Search Here"></input>
              </div>
							<button className="header_search_btn" onClick={this.props.openSearchBar}>
								<div className="header_search_btn_sub">
									<div className="search_icon">
										<div className="icon_black"></div>
									</div>
									<div className="icon_stick" style={this.props.wide_search_bar?{transform: "rotate(28deg)", left: "13px",transition: "all ease-in-out 0.3s"}:{}}></div>
								</div>
							</button>
						</div>
					</div>
				</nav>
			</header>
    );
  }
}

function mapStateToProps(state){
  return{
		groups : state.groups,
		wide_search_bar : state.wide_search_bar
  }
}

function mapDispatchToProps(dispatch) {
  return{
    addGroup : (groups)=>{
      const action = {type : 'SEARCH_FOR_GROUP', groups: groups.newGroups}
      dispatch(action);
		},
		openSearchBar : ()=>{
      const action = {type : 'OPEN_SEARCH_BAR'}
      dispatch(action);
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);