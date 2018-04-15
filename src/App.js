import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react' // Google API import
import MapContainer from './container/MapContainer.js';
import Menu from './component/Menu.js';

import DataCollection from './utils/dataCollection.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      newText: "",
      loading: false
    }
    this.loadData();
  }

  async loadData() {
    let data = await DataCollection.list();
    this.setState({data});
  }

  render() {
    return (
      <div>
        <div> <Menu /> </div>


        {this.state.data.map(doc => {
          return (
            <div>
              <span>{doc.id} - {doc.text}</span>
            </div>
          )
        })}

        <div className="Map">
          <h3>Google Maps Demo (not working right now on netlify)</h3>
          <div id="map"></div>

          <MapContainer google = {this.props.google} />
        </div> 


        <input 
          type = "text" 
          value = {this.state.newText}
          onChange = { (event) => {
            this.setState({newText:event.target.value});
          }}
        />

        <button onClick = {async () => {
          this.setState({loading: true});
          let item = {text: this.state.newText};
          let docref = await DataCollection.insert(item)
          let newData = [...this.state.data];

          item.id = docref.id;

          newData.push(item);
          this.setState({
            data: newData,
            newText: "",
            loading: false
          });

        }}>submit</button>

        <div className = {"loadingScreen " + (this.state.loading ? "active" : "")}>
          <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZJS4DTH4Zg4dB45U5LyigAtbYAV4deK4',
})(App)
