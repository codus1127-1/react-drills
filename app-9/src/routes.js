import React from 'react'
import Details from './Details'
import SignUp from './Signup'
import Home from './Home'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/details' component={Details} />
    </Switch>
)