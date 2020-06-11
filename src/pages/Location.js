import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import LocationMap from '../_components/_location/LocationMap'
const { Content } = Layout;
class Location extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
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
                    <LocationMap />
                </Content>
            </div>
        );
    }
}

export default Location;