import React from "react";

import "./style.scss";

import Weather from "./weather";

import { Manager, Reference, Popper } from 'react-popper';
import { thisTypeAnnotation } from "@babel/types";

export default class TopSection extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isSelectLocationOpen: false,
        };
    }

    onToggleSelectLocation() {
        this.setState((prevState) => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen }));
    }

    onLocationNameChange(e) {
        this.setState({ locationName: e.target.value });
    }

    onSelectCity() {
        const { locationName } = this.state;
        const { eventEmitter } = this.props;

        eventEmitter.emit("updateWeather", locationName);   
        this.setState({ isSelectLocationOpen: false });
          
    }

    render() {
        const { isSelectLocationOpen } = this.state;
        const { eventEmitter } = this.props;

        return ( <div className="top-container">
            <div className="title">WEATHER</div>
            <Weather {...this.props} />
            
            <Manager>
    <Reference>
      {({ ref }) => (
        <button className="btn btn-select-location" ref={ref} onClick={this.onToggleSelectLocation.bind(this)}>SELECT LOCATION</button>
      )}
    </Reference>
    <Popper placement="top">
      {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen && 
        //fullscreen
        // <div className="popup-container" ref={ref} style={{style, top: "155px", left: "145px"}} data-placement={placement}>
        //halfscreen
        <div className="popup-container" ref={ref} style={{style, top: "115px", left: "-205px"}} data-placement={placement}>
          <div className="form-container">
            <label htmlFor="location-name">Location Name</label>
            <input id="location-name" type="text" placeholder="City Name" onChange={this.onLocationNameChange.bind(this)}/>
            <button className="btn btn-select-location" ref={ref} onClick={this.onSelectCity.bind(this)}>SELECT</button>
          </div>
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
        </div>
        );
    }
}