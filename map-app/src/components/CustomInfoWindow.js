import React, { Component } from 'react';
import { InfoWindow } from "react-google-maps";

export class CustomInfoWindow extends Component {
	render() {
		return (
			<InfoWindow>
				<p>Name: {this.props.name}</p>
			</InfoWindow>
		);
	}
}