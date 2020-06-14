import React, { Component } from 'react';
import { Card } from 'antd';
import { SendOutlined, ShopOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class DroneCard extends Component {
    render() {
        return (
            <Card
                extra={<Link to = {'./drones/'+ this.props.drone.id}  >More</Link>}
                style={{ width: 300 }}
                cover={<img alt="example text" src={this.props.drone.avatar}/>}
                actions={[
                    <SettingOutlined key="setting" />,
                    <SendOutlined key="fight"/>,
                    <ShopOutlined key="bucket" />,
                ]}
            >
                <Meta
                    title={this.props.drone.name}
                    description="This is the description"
                />

            </Card>
        );
    }
}

export default DroneCard;