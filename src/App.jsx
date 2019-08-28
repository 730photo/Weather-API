import React, { Component } from 'react';
import './App.css';

import "./sass/app.scss"

import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";


class App extends Component {
  render() {
    return <div className="app-container">
      <div className="main-container">
          <div className="top-section">
            <TopSection />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
      </div>
    </div>;
  }
}

export default App;