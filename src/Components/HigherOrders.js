import React, { Component } from 'react'

const UpdatedComp = OriginalCom => {
    class NewComp extends React.Component {
        render() {
            return <OriginalCom name="New User" />;
        }
    }
    return NewComp;
}

export default UpdatedComp;