import React, { Component } from 'react';
import { Layout, Breadcrumb,Row,Col } from 'antd';
import LocationMap from '../_components/_location/LocationMap';
import Drone from '../_components/_location/Drone';
import DroneInforDetail from '../_components/_location/DroneInforDetail';

const { Content } = Layout;

class Location extends Component {
    state = {
        drone_list: [
            {
                id: "1",
                name: "drone 1",
                x: "117",
                y: "228",
                wind: 23,
                battery: 40,
                video_url: "https://www.youtube.com/embed/27FUo2f4l2w",
                keyframes: [
                    "transform: translate(180px, -200px)",
                    "transform: translate(310px, -200px)",
                    "transform: translate(310px, -300px)",
                    "transform: translate(180px, -300px)",
                    "transform: translate(180px, -200px)"
                ],
            },
            {
                id: "2",
                name: "drone 2",
                x: "17",
                y: "168",
                wind: 17,
                battery: 70,
                video_url: "https://www.youtube.com/embed/oxphaEyVlU4",
                keyframes: [
                    "transform: translate(280px, -300px)",
                    "transform: translate(410px, -100px)",
                    "transform: translate(280px, -100px)",
                    "transform: translate(280px, -300px)"
                ],
            }
        ],
        drone_show : -1
    }

    _on_drone_click = (value) =>{
        this.setState({drone_show: parseInt(value)})
    }


    
    _render_drone_info = ()=>{
        if(this.state.drone_show !== -1 ){
            return ( 
                <DroneInforDetail drone = {this.state.drone_list[this.state.drone_show-1]} /> 
            )
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Drone Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Location</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 700,
                    }}
                >
                    <Row>
                        <Col span={18}>
                            <LocationMap />
                        </Col>
                        <Col span={6}> 
                            {this._render_drone_info()}    
                        </Col>
                    </Row>
                    <div className="map_location">
                        {this.state.drone_list.map((drone) => {
                            return <Drone drone={drone} _on_drone_click={this._on_drone_click} />
                        })}
                    </div>
                </Content>
            </div>
        );
    }
}

export default Location;