import React, { Component } from 'react';
import { Layout, Breadcrumb, Typography, List, Pagination, Input, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Axios from 'axios';
import DroneCard from '../_components/DroneCard';

const { Search } = Input;
const { Content } = Layout;
const { Title } = Typography;

class Drones extends Component {
    state = {
        drones: [],
        searchText: '',
        minValue: 0,
        maxValue: 9,
        visible: false,
    }

    componentDidMount() {
        Axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`)
        .then(response => {
            const drones = response.data;
            this.setState({ drones: drones });
        })
        .catch(err => console.log(err));
    }

    handleChange = value => {
        this.setState({ 
            minValue: (value - 1) * 9,
            maxValue: value * 9
         });
    }

    enterDroneName = (value) => {
        this.setState({ searchText: value });
    }

    renderDrones = () => {
        var drones = [];
        if (this.state.searchText !== "") {
            drones = this.state.drones.filter(data => {
                if(data.name.toLowerCase().includes(this.state.searchText.toLowerCase())) return data;
                else return null;
            })
        } else drones = this.state.drones;

        return (
            <div>
                <List
                    grid={{ gutter: 5, column: 3 }}
                    dataSource={drones.slice(this.state.minValue, this.state.maxValue)}
                    renderItem={drone => (
                    <List.Item>
                        <DroneCard drone={drone} />
                    </List.Item>
                    )}
                />
                <Pagination total={50} defaultPageSize={9} onChange={this.handleChange}/>
            </div>
        ) 
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
                    <Breadcrumb.Item>Drones</Breadcrumb.Item>
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
                    <br />
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => this.enterDroneName(value)}
                    />
                    <br />
                    <br />
                    <div>{this.renderDrones()}</div>
                    <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<PlusOutlined />} 
                        size="large" 
                        className="fixedbutton"
                        onClick={this.showModal}
                    >
                    </Button>
                </Content>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default Drones;