import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dataActions from '../actions/dataActions';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { CustomMarker } from './CustomMarker';
import { MapSettings } from './MapSettings';

class Map extends Component {
	constructor() {
		super();

		this.state = {
			showMarkers: true
		}

		this.toggleMarkers = this.toggleMarkers.bind(this);
	}

	toggleMarkers() {
        console.log('Toggle markers.....')
        this.setState({ showMarkers: !this.state.showMarkers }); 
    }

    componentWillMount() {
        this.props.dataActions.fetchData();
    }

    componentDidUpdate() {
    	console.log(this.props.data);
    }

    render() {

    	var markers = [];

    	if(this.state.showMarkers && this.props.data) {
    		console.log("Will show markers!");
    		this.props.data.map((location, _index) => {
    			return markers.push(
    				<CustomMarker key={location._id} lat={location.latitude} lng={location.longitude} name={location.name} />
    			);
    		});
    	}

	   	const GoogleMapExample = withScriptjs(withGoogleMap(props => (
	      	<GoogleMap
	        	defaultCenter={{ lat: 43.852843, lng: 18.3874856 }}
	        	defaultZoom={ 12 }
	      	>
	      		{markers}

	      	</GoogleMap>
	   	)));

	   	return(
	      	<div>
	      		<MapSettings showMarkers={this.state.showMarkers} onChange={this.toggleMarkers} />
	        	<GoogleMapExample
	        		googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE&v=3.exp"
	          		loadingElement={<div style={{ height: '400px' }} />}
	          		containerElement={ <div style={{ height: '400px', width: '600px' }} /> }
	          		mapElement={ <div style={{ height: '400px' }} /> }
	        	/>
	      	</div>
	   	);

   	}
};

Map.propTypes = {
    dataActions: PropTypes.object,
    data: PropTypes.array
};

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
       dataActions: bindActionCreators(dataActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);