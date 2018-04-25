import React, { Component } from 'react';
import { InfoWindow } from "react-google-maps";

export class CustomInfoWindow extends Component {
	render() {
		return (
			<InfoWindow>
				<div>
					<h4>{this.props.name}</h4>
					<p>Category: {this.props.category}</p>
				</div>
			</InfoWindow>
		);
	}
}