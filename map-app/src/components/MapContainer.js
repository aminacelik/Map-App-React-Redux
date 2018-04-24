import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dataActions from '../actions/dataActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MapSettings } from './MapSettings';


class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            showMarkers: true
        };
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
        this.loadMap();
    }

    loadMap() {
        if(this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = Object.assign({}, {
                center: { lat: 43.852843, lng: 18.3874856 },
                zoom: 12,
                mapTypeId: 'roadmap'
            });

            this.map = new maps.Map(node, mapConfig);

            // add markers
            console.log("Show markers: " + this.state.showMarkers);
            if(this.state.showMarkers && this.props.data) {
                this.props.data.map((location, _index) => {
                    const marker = new this.props.google.maps.Marker({
                       position: {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)},
                       title: location.name,
                       map: this.map
                    });

                    var infowindow = new google.maps.InfoWindow({
                       content: `<h4>${location.name}</h4>
                       <p>at: ${location.latitude}, ${location.longitude}</p>`
                    });

                    marker.addListener('click', function() {
                        infowindow.close();
                        infowindow.open(this.map, marker);
                    });

                    return marker;
                })
            }
                
        }
    }


    render() {
        console.log("Render ------------")
        const style = {
            width: 600,
            height: 400
        };

        return (
            <div>
                <MapSettings showMarkers={this.state.showMarkers} onChange={this.toggleMarkers} />
                <div ref="map" style={style}>
                    Loading map...
                </div>
            </div>
        )
    }
}

MapContainer.propTypes = {
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
)(MapContainer);