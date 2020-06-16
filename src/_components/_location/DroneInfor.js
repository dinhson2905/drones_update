import React, { Component } from 'react';
import {Descriptions } from 'antd';

class DroneInfor extends Component {
    render() {
        return (
            <Descriptions title={this.props.drone.name} column={2}>
                <Descriptions.Item label="Fight ID">{this.props.drone.fightID}</Descriptions.Item>
                <Descriptions.Item label="Mission">{this.props.drone.mission}</Descriptions.Item>
                <Descriptions.Item label="Wind">{this.props.drone.wind}km/h</Descriptions.Item>
                <Descriptions.Item label="Battery">{this.props.drone.battery}%</Descriptions.Item>
                <Descriptions.Item label="Postiion X">{this.props.drone.x}&deg;10'</Descriptions.Item>
                <Descriptions.Item label="Postiion Y">{this.props.drone.y}&deg;22'</Descriptions.Item>
                <Descriptions.Item label="Date">17/6/2020</Descriptions.Item>
            </Descriptions>
        );
    }
}

export default DroneInfor;