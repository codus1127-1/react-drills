import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      filterString: "",
      description: ['Dog', 'German Shepherd', 'Male', 'Black', '1 year', '70lbs']
    }
  }

  handleChange(filter) {
    this.setState({
      filterString: filter.toLowerCase()
    })
  }

//HOW TO USE USE THE TOLOWERCASE FUNCTION.
  render() {

    let descriptionDisplay = this.state.description.filter((event) => {
      return event.toLowerCase().includes(this.state.filterString) 
    })
    .map((event, index) => {
      return <h2 key={index}>{event}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {descriptionDisplay}
      </div>
    );
  }
}

export default App;
