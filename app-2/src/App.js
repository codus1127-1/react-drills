import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state= {
      foods: ['milk', 'bread', 'eggs', 'butter', 'coffee', 'turkey', 'cheese']
    }
  }

  render(){
    let foodToDisplay = this.state.foods.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className="App">
        {foodToDisplay}

      </div>
    )
  }




}

export default App;
