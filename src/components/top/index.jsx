import React from "react";

import "./style.scss";

export default class TopSection extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render() {
        return <div className="top-container">
            <div className="title">WEATHER</div>
        </div>;
    }
}