import React, {Component} from 'react'

export default class Image extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="img">
                <img src={this.props.img} alt="image"/>
            </div>
        )
    }
}