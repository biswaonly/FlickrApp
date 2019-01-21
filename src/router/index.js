import Groups from '../component/groups/Groups';
import GroupEntry from '../component/GroupEntry/GroupEntry';
import { Route, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'

import React, { Component } from 'react'

 class AppRoute extends Component {
     render(){
         
         return(
            <Switch>
                <Route exact path='/' component={Groups}/>
                <Route 
                    path='/group-entry' exact strict 
                    render={
                        ( { location : { id } } )=>
                        <GroupEntry id={id} /> 
                    }
                />
            </Switch>
         )
     }
  
}


export default withRouter(AppRoute);



