import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import { CustomInfoWindow } from './CustomInfoWindow';
import customPin from '../../public/custom_pin.png'

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

		var icon = null; // render default icon item if category != shopping_malls
		if(this.props.category === 'shopping_malls') {
			icon = customPin;
		}
		
		return (
			<Marker position={position} onClick={this.toggleInfoWindow} icon={icon}>
				{this.state.infoWindowOpen && 
					<CustomInfoWindow name={this.props.name} category={this.props.category} />
				}
			</Marker>
	    );
		
	}
}