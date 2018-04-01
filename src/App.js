import React, { Component } from 'react';
import './App.css';

import { GoogleApiWrapper } from 'google-maps-react' // Google API import
import MapContainer from './container/MapContainer.js';
import Menu from './component/Menu.js';

class App extends Component {
  render() {
    return (
      <div>
        <div> <Menu /> </div>

        <div className="Map">
          <h3>Google Maps Demo</h3>
          <div id="map"></div>

          <MapContainer google = {this.props.google} />
        </div> 
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZJS4DTH4Zg4dB45U5LyigAtbYAV4deK4',
})(App)
