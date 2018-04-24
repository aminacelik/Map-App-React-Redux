import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './components/MapContainer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <MapContainer google={this.props.google} />
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'google-key'
})(App);
