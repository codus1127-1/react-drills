import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  updateUsername(name){
    this.setState({
      username: name
    })
  }

  updatePassword(pass){
    this.setState({
      password: pass
    })
  }

  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
        <input 
        onChange={e => this.updateUsername(e.target.value)}
        type="text" placeholder="Username"/>
        <input 
        onChange={e => this.updatePassword(e.target.value)}
        type="password" placeholder="Password"/>
        <button
        onClick={() => this.handleLogin()}
        >Login</button>
      </div>
    );
  }
}

export default App;
