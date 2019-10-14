import React, { Component } from "react";
import "./App.css";
import Todo from './Todo'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      toDoList: [],
      input: ''
    }
    this.addItem = this.addItem.bind(this)
  }

  handleChange(value){
    this.setState({
      input: value
    })
  }
addItem(){
  this.setState({
    toDoList: [...this.state.toDoList, this.state.input],
    input: ''
  })
}

  render() {
    let list = this.state.toDoList.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <input 
        onChange={e => this.handleChange(e.target.value)}
        type="text"/>
        <button
        onClick={this.addItem}
        >Add Item</button>
       <br/>
       {list}
        
      </div>
    );
  }
}

