import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange(value){
    this.setState({
      userInput: value
    })
  }

  render() {
    return (
      <div className="App">
        <input 
        onChange={e => this.handleChange(e.target.value)}
        type="text"/>
        <br/>
        <br/>
        <span>{this.state.userInput}</span>
      </div>
    );
  }
}

export default App;
