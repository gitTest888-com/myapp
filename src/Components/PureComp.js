import React, { Component } from 'react'
import UpdatedComp from './HigherOrders';

class PureComp extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        count: 0
    //    };
    //}
    //UpdateClick = () => {
    //    this.setState({ count: this.state.count + 1 });
    //}
    render() {
        //const { count } = this.state;
        console.log("Pure comp");
        return (
            <div>
                pure comp {this.props.name}
                
            </div>
        )
    }
}

export default PureComp;