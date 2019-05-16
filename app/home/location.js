import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class location extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        markers: [
            {
                title: '一点点',
                latlng: [37.74825,-122.6324],
                description: 'food of drink'
            },
            {
                title: '新作的茶',
                latlng: [37.64825,-122.6924],
                description: 'food of drink'
            },
            {
                title: '喜茶',
                latlng: [37.79825,-122.5324],
                description: 'food of drink'
            }
        ]
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            <MapView
                region={this.state.region}
                onRegionChange={this.onRegionChange}
            >
                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        )
    }
}