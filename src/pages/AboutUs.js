import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col, Typography, Card, Avatar } from 'antd';
const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>About us</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >
                    <Title style={{ textAlign: 'center' }}>We are HI08</Title>
                    <Row>
                        <Col span={4}>
                        </Col>
                        <Col span={16} style={{textAlign:"center"}}>
                                <Meta
                                    title="-About-"
                                    description="DRONE MANAGEMENT"
                                    style={{ margin: "30px" }}
                                />
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using 'Content here, content here', making it look
                            like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                            purpose. <br />
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using 'Content here, content here', making it look
                            like readable English.
                        </Col>
                        <Col span={4}>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Title style={{ textAlign: 'center' }}>Members</Title>
                    <br />
                    <Row>
                        <Col span={4} ></Col>
                        <Col span={6}>
                            <Card
                                style={{ width: 350, textAlign: "center" }}
                            >
                                <Avatar src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/67888834_719580035147496_1576718752475512832_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQlHNcm3Jj-ox1WEvak1-a9eg9MQfPUmEfEH4yL7t4x4jwKDAKYGnaSgNtR-0VpyfhUNInDfGvdcdW6B5XYMUN8I&_nc_ht=scontent.fhan4-1.fna&oh=383e7b9fd068f89566f806c90006bc09&oe=5F0C8B58" size={170} />

                                <Meta
                                    title="Nguyen Tri Hieu"
                                    description="Ngoc My - Quoc Oai - Ha Noi "
                                    style={{ marginTop: "30px" }}
                                />
                                <br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form
                            </Card>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={6}>
                            <Card
                                style={{ width: 350, textAlign: "center" }}
                            >
                                <Avatar src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-0/c0.14.206.206a/p206x206/308001_109822765841426_1595151255_n.jpg?_nc_cat=110&_nc_sid=da31f3&_nc_oc=AQmxbYwuAAzfh4n0Iz0vL-Fkih8h_J6DdRAfg2D0p_Cu3O9BK3NjKlIcYC4mSiDtWaoA-9ljsqZ-4KxW-_SSr0fY&_nc_ht=scontent-hkt1-1.xx&oh=f17d457430e7a8b6677c0b3e609d3223&oe=5F0F52D0" size={170} />

                                <Meta
                                    title="Nguyen Dinh Son"
                                    description="Huu Bang - Thach That - Ha Noi "
                                    style={{ marginTop: "30px" }}
                                />
                                <br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col span={4} ></Col>
                        <Col span={6}>
                            <Card
                                style={{ width: 350, textAlign: "center" }}
                            >
                                <Avatar src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/102673562_1599497960213479_5531032198161609194_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQlLhIv5Q0LjPYwFFI16SqiDhltryGxtbrVSgEW4zjVqgMPjZUcCHMZICz3m-2VtrYRh3kB6n_hJRVW-W6eHSO-I&_nc_ht=scontent.fhan4-1.fna&oh=134f3d02589993e34d97f512221245a8&oe=5F0DE0CD" size={170} />

                                <Meta
                                    title="Tran Bao Hieu"
                                    description="Sam Son - Thanh Hoa "
                                    style={{ marginTop: "30px" }}
                                />
                                <br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form
                            </Card>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={6}>
                            <Card
                                style={{ width: 350, textAlign: "center" }}
                            >
                                <Avatar src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-0/s206x206/84982390_1953449318122666_5924399126992125952_n.jpg?_nc_cat=109&_nc_sid=da31f3&_nc_oc=AQkh5hkOJKgp9MeUt61Ob09ovVJkcKG_Q3GNv3ITVtCE5AtDZAHSmplrcz3CJzE-Uaq3OVlPlA8J01K10PsRqfuI&_nc_ht=scontent-hkt1-1.xx&_nc_tp=7&oh=916999741e61811678ce080dc52ed8d0&oe=5F104182" size={170} />

                                <Meta
                                    title="Dang Ngoc Diep"
                                    description="Chỗ nào đó ở Hà Nội"
                                    style={{ marginTop: "30px" }}
                                />
                                <br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </div>
        );
    }
}

export default AboutUs;