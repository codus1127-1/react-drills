import React from 'react'

export default class Todo extends React.Component{
    

    render(){
        return(
            <div className="todo">
                <h2>{this.props.task}</h2>
            </div>
        )
    }
}