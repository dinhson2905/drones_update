import React, { Component } from 'react';
import { Descriptions, Typography } from 'antd';

const { Title } = Typography;

class DroneInforDetail extends Component {
    render() {
        return (
            <div>
                <Title level={4}>{this.props.drone.name}</Title>
                <iframe width="280" height="180" src={this.props.drone.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Descriptions title="Drone Info" column={1}>
                    <Descriptions.Item label="Wind">{this.props.drone.wind}km/h</Descriptions.Item>
                    <Descriptions.Item label="Battery">{this.props.drone.battery}%</Descriptions.Item>
                    <Descriptions.Item label="Postiion X">{this.props.drone.x}&deg;10'</Descriptions.Item>
                    <Descriptions.Item label="Postiion Y">{this.props.drone.y}&deg;22'</Descriptions.Item>
                    <Descriptions.Item label="Date">
                        30/2/2020
                </Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default DroneInforDetail;