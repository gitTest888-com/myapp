import React, { Component } from 'react'
import UpdatedComp from './HigherOrders';

class PureComp extends Component {
 
    render() {
        //const { count } = this.state;
        console.log("Reg comp");
        return (
            <div>
                Reg comp {this.props.name}
                
            </div>
        )
    }
}

export default PureComp;