import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import { CustomInfoWindow } from './CustomInfoWindow';

export class CustomMarker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			infoWindowOpen: false
		}

		this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
	}

	toggleInfoWindow() {
		this.setState({ infoWindowOpen: !this.state.infoWindowOpen });
	}

	render() {
		const position = {
			lat: parseFloat(this.props.lat),
			lng: parseFloat(this.props.lng)
		};

		return (
			<Marker position={position} onClick={this.toggleInfoWindow}>
				{this.state.infoWindowOpen && 
					<CustomInfoWindow name={this.props.name} />
				}
			</Marker>
	    );
	}
}