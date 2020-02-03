
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing'
import Events from './Components/Events'

export default (
    <Switch>
        <Route exact path = '/' Component={Landing}/>
        <Route path = 'events' Component={Events}/>
    </Switch>
)