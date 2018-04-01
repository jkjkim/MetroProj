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
        center: {lat: 33.683128, lng: -117.757889}, 
        zoom: 11,
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig);
      
    }
  }


  render() {

    const style = { 
      width: '50wh', 
      height: '50vh' 
    }

    return (
      <div ref = "map" style = {style}>  </div>
    );
  }
}
