import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {

  handleChange=(event)=>{
    if(event.target.value){
      fetch(`https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=`+process.env.REACT_APP_API_KEY+`&text=`+event.target.value+`&per_page=10&format=json&nojsoncallback=1`)
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        let groups= data.groups.group.map((group)=>{
          return ({
            id : group.nsid,
            name : group.name,
            iconfarm : group.iconfarm,
            iconserver : group.iconserver
          })
        })
        
        this.props.addGroup({
          groups
        });
      })
    }
    else{
      this.props.addGroup({
        groups:[]
      });
    }
  }

  
  render() {
    return (
      <header className="header">
				<nav className="header_nav">

					<div className="header_logo">THE LOGO</div>

					<div className="space"></div>

	
					<div className="header_search" style={this.props.wide_search_bar?{width:450,transition: "all ease-in-out 0.3s"}:{width:50,transition: "all ease-in-out 0.3s"}}>
						<div className="header_search_space">
							<input className="header_search_input" autoFocus={this.props.wide_search_bar}  style={this.props.wide_search_bar?{display:"inline-block"}:{display:"none"}} onChange={this.handleChange} type="text" placeholder="Search Here"></input>

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
      const action = {type : 'SEARCH_FOR_GROUP', groups: groups.groups}
      dispatch(action);
		},
		openSearchBar : ()=>{
      const action = {type : 'OPEN_SEARCH_BAR'}
      dispatch(action);
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);