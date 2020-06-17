import React, { Component } from 'react';
import { PageHeader, Layout, Descriptions } from 'antd';
import bg1 from './../_images/bg1.jpg';


const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <div>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 500,
                    }}
                >   
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            title="Monitoring the electricity transmission network"
                            subTitle=""
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Teams">Hedspi AS K61</Descriptions.Item>
                                <Descriptions.Item label="Location Time">2020-06-12</Descriptions.Item>
                                <Descriptions.Item label="Remarks">Đại học Bách Khoa Hà Nội</Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <img alt="example" src={bg1} style={{width: '100%'}} />
                </Content>   
            </div>
        );
    }
}

export default HomePage;