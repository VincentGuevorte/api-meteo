import otherdaysWeather from './otherdaysWeather.js';
import todayWeather from './todayWeather.js';
import React, {Component} from 'react';
import React from 'react-dom';
import axios from 'axios';
import './App.css';



class App extends Component {

  userAction = (latitude, longitude) => {
    alert('Enter a City...');
  }

  render() {

    return (
      <div className="app">
        <p className="todayWeather">
          <todayWeather />
        </p>
        <p className="otherdaysWeather">
            <otherdaysWeather />
        </p>
      </div>
      );

  };

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
