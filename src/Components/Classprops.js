import React, { Component } from 'react'
import UpdatedComp from './HigherOrders';

export class Classprops extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        name: "xxx";
    //    };
    //}
    //UpdateClick = () => {
    //    this.setState({ count: this.state.count + 1 });
    //}
    render() {
        //const { count } = this.state;
        return (
            <div>
                <h1> hello {this.props.name}</h1>
                <p>{this.props.children} </p>
            </div>
        )
    }
}

export default Classprops;