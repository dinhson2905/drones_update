import React, { Component } from 'react';
import { Layout, Breadcrumb, Col, Row, Carousel, Card, Button, PageHeader, Descriptions } from 'antd';
import FormFilter from './../_components/_data/FormFilter';
import u1 from './../_images/u1.jpg';
import u2 from './../_images/u2.jpg';
import u3 from './../_images/u3.png';
import u4 from './../_images/u3.jpg';
import u5 from './../_images/u5.jpg';
import u6 from './../_images/u6.jpg';

const { Content } = Layout;

class Data extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
                    <Breadcrumb.Item>Raw Data Analysis</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >   <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            title="Raw Data Analysis"
                            subTitle=""
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Total Fight">450</Descriptions.Item>
                                <Descriptions.Item label="Total Images">10,098</Descriptions.Item>
                                <Descriptions.Item label="Location Time">2020-06-12</Descriptions.Item>
                                <Descriptions.Item label="Region">Đại học Bách Khoa Hà Nội</Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>                 
                    <Row>
                        <Col span={8}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                    minHeight: 200,
                                }}
                            >
                                <Card
                                    cover={
                                        <Content
                                            style={{
                                                padding: 24,
                                                margin: 0,
                                                minHeight: 100,
                                            }}
                                        >
                                            <FormFilter />
                                        </Content>
                                    }
                                >
                                </Card>
                            </Content>
                        </Col>
                        <Col span={8}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                    minHeight: 200,
                                }}
                            >
                                <Carousel effect="fade">
                                    <div><img alt="example" src={u1} /></div>
                                    <div><img alt="example" src={u2} /></div>
                                    <div><img alt="example" src={u3} /></div>
                                    <div><img alt="example" src={u4} /></div>
                                    <div><img alt="example" src={u5} /></div>
                                    <div><img alt="example" src={u6} /></div>
                                </Carousel>
                                <br />
                                <br />
                                <Button type="primary" block>Save</Button>
                                <br />
                                <br />
                                <Button type="primary" block danger>Delete</Button>
                            </Content>
                        </Col>
                        <Col span={8}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                    minHeight: 100,
                                }}
                            >
                                <Descriptions title="Image Info" bordered column={1}>
                                    <Descriptions.Item label="Fight ID">113</Descriptions.Item>
                                    <Descriptions.Item label="Drone">Drone 1</Descriptions.Item>
                                    <Descriptions.Item label="Pilot">Tran Bao Hieu</Descriptions.Item>
                                    <Descriptions.Item label="Created At">2020-06-09 18:00:00</Descriptions.Item>
                                    <Descriptions.Item label="Location">UAV 1, Hoa Binh Factory</Descriptions.Item>
                                    <Descriptions.Item label="File format">JPG</Descriptions.Item>
                                    <Descriptions.Item label="Shape">1200x628x3</Descriptions.Item>                                       
                                </Descriptions>
                            </Content>
                        </Col>
                    </Row>
                </Content>
            </div>
        );
    }
}

export default Data;