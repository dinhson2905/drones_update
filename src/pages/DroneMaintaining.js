import React, { Component } from 'react';
import { Layout, Breadcrumb, Typography, List, Pagination, Input } from 'antd';
import Axios from 'axios';
import DroneCard from '../_components/DroneCard';

const { Search } = Input;
const { Content } = Layout;
const { Title } = Typography;

class DroneMaintaining extends Component {
    state = {
        drones: [],
        searchText: '',
        minValue: 0,
        maxValue: 9,
    }
    componentDidMount() {
        Axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`)
        .then(response => {
            const drones = response.data.filter(data => {
                if (data.status === '3') return data;
                else return null;
            });
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
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
                    <Breadcrumb.Item>Drones</Breadcrumb.Item>
                    <Breadcrumb.Item>Mantaining</Breadcrumb.Item>
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
                </Content>
            </div>
        );
    }
}

export default DroneMaintaining;