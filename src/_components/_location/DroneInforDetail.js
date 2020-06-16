import React, { Component } from 'react';
import { Descriptions, Carousel } from 'antd';
import u1 from './../../_images/u1.jpg';
import u2 from './../../_images/u2.jpg';
import u3 from './../../_images/u3.png';
import u4 from './../../_images/u3.jpg';
import u5 from './../../_images/u5.jpg';
import u6 from './../../_images/u6.jpg';

class DroneInforDetail extends Component {
    render() {
        return (
            <div>
                <Carousel effect="fade">
                    <div><img alt="example" src={u1} /></div>
                    <div><img alt="example" src={u2} /></div>
                    <div><img alt="example" src={u3} /></div>
                    <div><img alt="example" src={u4} /></div>
                    <div><img alt="example" src={u5} /></div>
                    <div><img alt="example" src={u6} /></div>
                </Carousel>
                <Descriptions title={this.props.drone.name} column={1}>
                    <Descriptions.Item label="Fight ID">{this.props.drone.fightID}</Descriptions.Item>
                    <Descriptions.Item label="Mission">{this.props.drone.mission}</Descriptions.Item>
                    <Descriptions.Item label="Wind">{this.props.drone.wind}km/h</Descriptions.Item>
                    <Descriptions.Item label="Battery">{this.props.drone.battery}%</Descriptions.Item>
                    <Descriptions.Item label="Postiion X">{this.props.drone.x}&deg;10'</Descriptions.Item>
                    <Descriptions.Item label="Postiion Y">{this.props.drone.y}&deg;22'</Descriptions.Item>
                    <Descriptions.Item label="Date">17/6/2020</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default DroneInforDetail;