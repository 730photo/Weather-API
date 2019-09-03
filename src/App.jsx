import React, { Component } from 'react';
import './App.css';

import "./sass/app.scss"

import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";

import axios from "axios";

//API Key
const WEATHER_KEY = "df4354cc34484dda87b22226190309";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cityName: "Atlanta",
        forecastDays: 4,
        isLoading: true,

    }
  }
    
  componentDidMount() {
    const { cityName, forecastDays } = this.state;

    const URL = `https://api-cdn.apixu.com/v1/forecast.json?key=${WEATHER_KEY} &q=${cityName} &days=${forecastDays}`
    axios.get(URL).then(res => {
      return res.data;
    }).then((data) => {
      this.setState({ 
        isLoading: false,
        temp_f: data.current.temp_f, 
        isDay: data.current.is_day, 
        text: data.current.condition.text, 
        iconURL: data.current.condition.icon 
      });
    })
    .catch(err => {
      if (err) console.error("cannot fetch weather data from API, ", err);
    });
  }

  render() {

    const { isLoading, cityName, temp_f, isDay, text, iconURL } = this.state;

    return <div className="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading && (
          <div className="top-section">
            <TopSection location={cityName} temp_f={temp_f} isDay={isDay} text={text} iconURL={iconURL}/>
        </div>
        )}
          <div className="bottom-section">
            <BottomSection />
          </div>
      </div>
    </div>;
  }
}

export default App;