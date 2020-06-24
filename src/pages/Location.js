import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col, Descriptions, PageHeader, Card } from 'antd';
import LocationMap from '../_components/_location/LocationMap';
import Drone from '../_components/_location/Drone';
import DroneInforDetail from '../_components/_location/DroneInforDetail';

const { Content } = Layout;

class Location extends Component {
    state = {
        drone_list: [
            {
                id: "1",
                name: "Drone 1",
                fightID: "1",
                mission: "Check UAV 1",
                x: "117",
                y: "228",
                wind: 23,
                battery: 40,
                keyframes: [
                    "transform: translate(100px, -500px)",
                    "transform: translate(200px, -500px)",
                    "transform: translate(100px, -480px)",
                    
                ],
            },
            {
                id: "2",
                name: "Drone 2",
                fightID: "1",
                mission: "check UAV 2",
                x: "17",
                y: "168",
                wind: 17,
                battery: 70,
                keyframes: [
                    "transform: translate(280px, -500px)",
                    "transform: translate(100px, -460px)",
                    "transform: translate(100px, -400px)",
                ],
            },
            {
                id: "3",
                name: "Drone 3",
                fightID: "2",
                mission: "Check UAV 3",
                x: "20",
                y: "178",
                wind: 17,
                battery: 70,
                keyframes: [
                    "transform: translate(350px, -500px)",
                    "transform: translate(300px, -450px)",
                    "transform: translate(320px, -400px)",
                ],
            },
            {
                id: "4",
                name: "Drone 4",
                fightID: "2",
                mission: "Check UAV 4",
                x: "25",
                y: "166",
                wind: 17,
                battery: 70,
                keyframes: [
                    "transform: translate(400px, -500px)",
                    "transform: translate(370px, -500px)",
                    "transform: translate(300px, -400px)",
                ],
            }
        ],
        drone_show : 1
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
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            title="Location"
                            subTitle=""
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Total Drones is following">4</Descriptions.Item>
                                <Descriptions.Item label="Total Fights">2</Descriptions.Item>
                                <Descriptions.Item label="Location time">2020-06-10</Descriptions.Item>
                                <Descriptions.Item label="Region">Hòa Bình Factory, Hòa Bình, Việt Nam</Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <Row>
                        <Col span={18}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                }}
                            >
                                <Card cover={<LocationMap />} />
                            </Content>
                            
                        </Col>
                        <Col span={6}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                }}
                            >
                                {this._render_drone_info()} 
                            </Content>                   
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