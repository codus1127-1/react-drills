import React from 'react'
import axios from 'axios'

export default class Details extends React.Component {
    constructor() {
        super()

        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        axios
            .get(
                `https://practiceapi.devmountain.com/products/${
                this.props.match.params.id
                }`
            ).then(response => {
                this.setState({
                    item: response.data
                })
            })
    }

    render() {
        return (
            <div className="details">
                <h2>{this.state.item.title}</h2>
                <img width="200" src={this.state.item.image} alt="product"/>
                <h4>{`Price: $${this.state.item.price}.00`}</h4>
            </div>
        )
    }
}