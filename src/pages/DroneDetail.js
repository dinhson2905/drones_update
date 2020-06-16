import React, { Component } from 'react';
import { Breadcrumb,Descriptions, Card, Typography, Layout, Row, Col } from 'antd'
import axios from 'axios'

const { Meta } = Card;
const { Title } = Typography;
const { Content } = Layout;


class DroneDetail extends Component {
  state = {
    droneId: this.props.match.params.droneID,
    drone: 0
  }
  componentDidMount() {
    axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones/` + this.state.droneId)
      .then(res => {
        const drone = res.data;
        this.setState({ drone });
      })
      .catch(error => console.log(error));
    console.log(this.state.drone)
  }
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Drone Management</Breadcrumb.Item>
          <Breadcrumb.Item>Drones</Breadcrumb.Item>
          <Breadcrumb.Item>Drone detail</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 1000,
          }}
        >
          <Title style={{ textAlign: 'center' }}>Drones List</Title>
          <br />
          <Row>
            <Col span={2}></Col>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 350 }}
                cover={<img alt="example" src={this.state.drone.avatar} />}
              >
                <Meta title={this.state.drone.name} description={this.state.drone.type} style={{textAlign:'center'}} />
              </Card>
            </Col>
            <Col span={12}>
              <Descriptions title="Drone Info" column={2}>
                <Descriptions.Item label="Type">{this.state.drone.type}</Descriptions.Item>
                <Descriptions.Item label="Size">{this.state.drone.size}</Descriptions.Item>
                <Descriptions.Item label="Engines">{this.state.drone.engines}</Descriptions.Item>
                <Descriptions.Item label="Number of rotors">{this.state.drone.number_rotors}</Descriptions.Item>
                <Descriptions.Item label="Payload Weights">{this.state.drone.payload_weight}</Descriptions.Item>
                <Descriptions.Item label="Flight time">{this.state.drone.flight_time}</Descriptions.Item>
                <Descriptions.Item label="Max data link range">{this.state.drone.max_data_link_range}</Descriptions.Item>
                <Descriptions.Item label="Power supply">{this.state.drone.power_supply}</Descriptions.Item>
                <Descriptions.Item label="Date">
                  30/2/2020
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Content>
      </div>

    );
  }
}

export default DroneDetail;