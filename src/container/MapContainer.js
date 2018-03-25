import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import "./MapContainer.css";

export default class MapContainer extends React.Component {
  componentDidUpdate() {
    this.loadMap();  // calls load map function
  }

  loadMap = () => {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 33.683128, lng: -117.757889}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig);
      
    }
  }


  render() {

    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return (
      <div ref = "map" style = {style}>  </div>
    );
  }
}
