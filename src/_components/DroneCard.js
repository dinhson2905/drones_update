import React, { Component } from 'react';
import { Card, Tag } from 'antd';
import { SendOutlined, ShopOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class DroneCard extends Component {

    render() {
        const status = this.props.drone.status;
        console.log(status);
        var color = '';
        var statusName = '';
        if (status === '1') {
            color = 'green';
            statusName = 'Active'
        } else if (status === '2') {
            color = 'blue';
            statusName = 'In the Bucket'
        } else {
            color = 'red';
            statusName = 'Maintaing';
        }

        return (
            <Card
                title={
                    <Tag color={color}>{statusName}</Tag>
                }
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