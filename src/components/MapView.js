import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

 class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 60.14,  lng: 10.25 },
      zoom: 12,
    }
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    );
  }
}
export default MapView;