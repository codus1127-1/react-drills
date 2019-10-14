import React from 'react'

export default class NewTask extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
        this.addItem = this.addItem.bind(this)
    }

    handleChange(value) {
        this.setState({
            input: value
        })
    }
    addItem() {
        this.props.add(this.state.input)
        this.setState({ input: '' })
    }
    F
    render() {
        return (
            <div className="newTask">
                <input
                    onChange={e => this.handleChange(e.target.value)}
                    type="text" />
                <button
                    onClick={this.addItem}>Add Item</button>
            </div>
        )
    }
}