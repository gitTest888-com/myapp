import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "testname"
        };
    }
    //UpdateClick = () => {
    //    this.setState({ count: this.state.count + 1 });
    //}
    cMount() {
        setInterval(() => {
            this.setState({ name:"testname"})
        },3000
        )
    }
    render() {
        //const { count } = this.state;
        console.log("Parent comp");
        return (
            <div>
                parent comp
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;