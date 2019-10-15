import React, { Component } from "react";
import "./App.css";
import routes from './routes'
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>
            <h1>Home</h1>
          </Link>
          <Link to='/signup'>
            <h1>Sign Up</h1>
          </Link>
          <Link to='/details'>
            <h1>Details</h1>
          </Link>
          
        </nav>
       {routes}
      </div>
    );
  }
}

export default App;
