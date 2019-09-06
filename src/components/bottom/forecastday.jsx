import React from "react";


export default class forecastday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { day } = this.props;

        if(!day) return null;

        return <div className="forecastday-container">
            <div className="image"><img src={day.condition.icon} alt=""/></div>
            <div className="text">{day.avgtemp_f}</div>
            <div className="muted-text">{day.condition.text}</div>
        </div>
    }
}