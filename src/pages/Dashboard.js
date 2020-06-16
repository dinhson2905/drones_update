import React, { Component } from 'react';
import { Layout, Breadcrumb, PageHeader, Button, Descriptions, Row, Col, Typography, Card, Table, Space } from 'antd';
import { TeamOutlined, RocketOutlined, AntCloudOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import map_image from '../_images/map.png';
import DoughnutChart from '../_components/DoughnutChart';

const { Content } = Layout;
const { Title } = Typography;

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: text => <a>{text}</a>,
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday'
    },
    {
        title: 'Working Parts',
        dataIndex: 'bophan',
        key: 'bophan'
    },
    {
        title: 'Competence',
        dataIndex: 'chucvu',
        key: 'chucvu'
    },
    {
        title: 'Action',
        key: 'action',
        render: text => (
            <Space size="middle">
                <Link>View</Link>
            </Space>
        )
    }
];

const members = [
    {
        id: '1',
        name: 'Nguyễn Đình Sơn',
        birthday: '19/05/1988',
        bophan: 'Network monitoring',
        chucvu: 'Commander',
    },
    {
        id: '2',
        name: 'Nguyễn Trí Hiếu',
        birthday: '19/05/1988',
        bophan: 'Network monitoring',
        chucvu: 'Commander',
    },
    {
        id: '3',
        name: 'Trần Bảo Hiếu',
        birthday: '19/05/1988',
        bophan: 'Network monitoring',
        chucvu: 'Commander',
    },
    {
        id: '4',
        name: 'Đặng Ngọc Diệp',
        birthday: '19/05/1988',
        bophan: 'Network monitoring',
        chucvu: 'Commander',
    },
    {
        id: '5',
        name: 'John',
        birthday: '19/05/1988',
        bophan: 'Network monitoring',
        chucvu: 'Commander',
    },
];


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Drone Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            title="Drones Management"
                            subTitle=""
                            extra={[
                                <Button key="3" icon={<AntCloudOutlined />}>Location</Button>,
                                <Button key="2" icon={<RocketOutlined />}>Drones</Button>,
                                <Button key="1" icon={<TeamOutlined />}>Members</Button>,
                            ]}
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Teams">Sơn, Hiếu, Hiếu, Diệp</Descriptions.Item>
                                <Descriptions.Item label="Association">
                                    <Link>Drone Management</Link>
                                </Descriptions.Item>
                                <Descriptions.Item label="Creation Time">2020-06-10</Descriptions.Item>
                                <Descriptions.Item label="Effective Time">2020-06-10</Descriptions.Item>
                                <Descriptions.Item label="Remarks">
                                    Đại Học Bách Khoa Hà Nội
                                </Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <Row>
                        <Col span={16}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                    minHeight: 200,
                                }}
                            >
                                <Card
                                title={<Title level={2}>Location</Title>} 
                                extra={<Link to="/drone-management/location">View</Link>}
                                cover={
                                    <img
                                      alt="example"
                                      src={map_image}
                                    />
                                  }
                                >
                                    Định vị vị trí của các Drones đang hoạt động
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
                                <Card
                                title={<Title level={2}>Drones</Title>} 
                                extra={<Link to="/drone-management/drones">View</Link>}
                                cover={
                                    <DoughnutChart />
                                  }
                                >
                                </Card>
                            </Content>  
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Content
                                style={{
                                    padding: 12,
                                    margin: 0,
                                    minHeight: 200,
                                }}
                            >
                                <Card
                                title={<Title level={2}>Members</Title>} 
                                extra={<Link to="/drone-management/members">More</Link>}
                                cover={
                                    <Table
                                        columns={columns}
                                        dataSource={members}
                                    />
                                  }
                                >
                                </Card>
                            </Content> 
                        </Col>
                    </Row>

                </Content>
            </div>
        );
    }
}

export default Dashboard;