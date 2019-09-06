import React from "react";

import "./style.scss";


import Forecastday from "./forecastday";

export default class BottomSection extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render() {
        const { forecastDays } = this.props;
        return ( 
            <div className="bottom-container">
            <div className="inner-container">
            {forecastDays && 
            forecastDays.map((day, idx) => {
                return <Forecastday day={day.day} key={idx}/>;
            })}
        </div>
        </div>
        );
    }
}