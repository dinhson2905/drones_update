import React, { Component } from 'react';
import map_image from '../../images/map.png';

class LocationMap extends Component {
    render() {
        return (
            <img
                className="d-block w-100"
                src={map_image}
                alt="Second slide"
            />
        );
    }
}

export default LocationMap;