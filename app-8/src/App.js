import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state ={
      lukeSkywalker: '',
      homeWorld: ''
    }
  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people/10')
    .then(response => {
      this.setState({
        lukeSkywalker: response.data
      })
    })
  
  }

  // componentDidUpdate(){
  //   axios.get("https://swapi.co/api/planets/20/")
  //   .then(response => {
  //     this.setState({
  //       homeWorld: response.data
  //     })
  //   })
  // }

  render() {
    console.log(this.state.lukeSkywalker)
    return (
      <div className="App">
        <h1>Name: {this.state.lukeSkywalker.name} </h1>
        <h1>Birth Year: {this.state.lukeSkywalker.birth_year} </h1>
        <h1>Height: {this.state.lukeSkywalker.height} cm</h1>
        <h1>Eye Color: {this.state.lukeSkywalker.eye_color} </h1>
        <h1>Hair Color: {this.state.lukeSkywalker.hair_color}</h1>
        {/* <h1>Home World: </h1> */}
       
      </div>
    );
  }
}

export default App;
