import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Details from './Details'
import Products from './Products'

export default (
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route path='/details/:id' component={Details}/>
    </Switch>
)