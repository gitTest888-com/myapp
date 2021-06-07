import React, { Component } from 'react'
import UpdatedComp from './HigherOrders';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    IncCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
 
    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseEnter={this.IncCount}>{this.props.name} Inc to {count}</button>
            </div>
        )
    }
}

export default UpdatedComp(Counter);