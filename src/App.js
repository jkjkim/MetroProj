import React, { Component } from 'react';
import './App.css';

import { GoogleApiWrapper } from 'google-maps-react' // Google API import
import MapContainer from './container/MapContainer.js';

class App extends Component {
  render() {
    return (
      <div className="Map">
        <h3>My Google Maps Demo</h3>
        <div id="map"></div>

        <MapContainer google = {this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZJS4DTH4Zg4dB45U5LyigAtbYAV4deK4',
})(App)
