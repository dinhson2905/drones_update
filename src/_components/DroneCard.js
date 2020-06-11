import React, { Component } from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class DroneCard extends Component {
    render() {
        return (
            <Card
                extra={<Link to="#">More</Link>}
                style={{ width: 300 }}
                cover={<img alt="example text" src={this.props.drone.avatar}/>}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
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