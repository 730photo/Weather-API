import React from 'react';


export default class Store extends React.Component {

    constructor(props) {
        super(props);
        //Main App State
        this.state = {
            appName: "weather app"
        }
    }

    render() {
        return React.Children.map(this.props.children, (child) => {
           return React.cloneElement(child, { ...this.state });
        });
    }
}