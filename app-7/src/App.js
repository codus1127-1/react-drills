import React, { Component } from "react";
import "./App.css";
import List from './List'
import NewTask from './NewTask'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      toDoList: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
    
  }

  handleAddTask(task){
    this.setState({
      toDoList: [...this.state.toDoList, task]
    })
  }

 

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.toDoList}/>
       
      
        
      </div>
    );
  }
}
