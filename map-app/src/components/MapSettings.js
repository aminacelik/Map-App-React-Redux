import React, { Component } from 'react';

export class MapSettings extends Component {
	render() {
		const showMarkers = this.props.showMarkers && this.props.showMarkers === true;
		const labelStyle = {
			cursor: 'pointer'
		};

		return (
			<div>
				<label style={labelStyle}><input type="radio" name="markers" value="on" checked={showMarkers} onChange={this.props.onChange} />Show markers</label>
				<label style={labelStyle}><input type="radio" name="markers" value="off" checked={!showMarkers} onChange={this.props.onChange} />Hide markers</label>
			</div>
		);
	}
}